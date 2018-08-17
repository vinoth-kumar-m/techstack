/*
    SPDX-License-Identifier: Apache-2.0
*/

/**
 *
 * Created by shouhewu on 6/8/17.
 *
 */

var http = require("http");
var url = require("url");
var BlockchainApp = require("./server/application/BlockchainApp.js")
var appconfig = require("./appconfig.json");
var helper = require('./server/helper.js')
var logger = helper.getLogger("main");
var express = require("express");
var path = require("path");
var pgservice = require('./server/persistance/postgreSQL/db/pgservice.js');

var host = process.env.HOST || appconfig.host;
var port = process.env.PORT || appconfig.port;

var server;
let connections = [];

async function start() {
  var blockchainApp = new BlockchainApp();
  server = http.createServer(blockchainApp.getApp());
  await blockchainApp.initialize();
  blockchainApp.getApp().use(express.static(path.join(__dirname, "client/build")));
  logger.info(
    "Please set logger.setLevel to DEBUG in ./app/helper.js to log the debugging."
  );
  // ============= start server =======================
  server.listen(port, function () {
    console.log('\n')
    console.log(`Please open web browser to access ：http://${host}:${port}/`);
    console.log('\n')
    console.log('pid is ' + process.pid)
    console.log('\n')
  });

  server.on('connection', connection => {
    connections.push(connection);
    connection.on('close', () => connections = connections.filter(curr => curr !== connection));
  });
  
}

start();


// this function is called when you want the server to die gracefully
// i.e. wait for existing connections
var shutDown = function () {
  console.log('Received kill signal, shutting down gracefully');
  server.close(() => {
    console.log('Closed out remaining connections');
    pgservice.closeconnection();
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    pgservice.closeconnection();
    process.exit(1);
  }, 10000);

  connections.forEach(curr => curr.end());
  setTimeout(() => connections.forEach(curr => curr.destroy()), 5000);
}
// listen for TERM signal .e.g. kill
process.on('SIGTERM', shutDown);
// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', shutDown);