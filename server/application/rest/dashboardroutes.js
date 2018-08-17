/**
*    SPDX-License-Identifier: Apache-2.0
*/

var requtil = require("./requestutils.js");
var PlatformBuilder = require("../platform/PlatformBuilder.js");

const dashboardroutes = (app, persist) => {

  platform = PlatformBuilder.build('dummy');
  crudService = persist.getCrudService();

  app.get("/api/dashboard/stats", async function (req, res) {
    var data = platform.getStatistics();
    if (data) {
      return res.send({
        status: 200,
        data
      });
    }
    return requtil.notFound(req, res);
  });

  app.get("/api/dashboard/txnPerHour", async function (req, res) {
    var data = platform.getTxnPerHour();
    if (data) {
      return res.send({
        status: 200,
        data
      });
    }
    return requtil.notFound(req, res);
  });

  app.get("/api/dashboard/txnPerMin", async function (req, res) {
    var data = platform.getTxnPerMin();
    if (data) {
      return res.send({
        status: 200,
        data
      });
    }
    return requtil.notFound(req, res);
  });

  app.get("/api/dashboard/txnPerOrg", async function (req, res) {
    var data = platform.getTxnPerOrg();
    if (data) {
      return res.send({
        status: 200,
        data
      });
    }
    return requtil.notFound(req, res);
  });

  app.get("/api/dashboard/transactions", async function (req, res) {
    var data = platform.getTransactions();
    if (data) {
      return res.send({
        status: 200,
        data
      });
    }
    return requtil.notFound(req, res);
  });

}

module.exports = dashboardroutes;