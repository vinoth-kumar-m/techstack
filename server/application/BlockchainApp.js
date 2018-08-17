/**
 *    SPDX-License-Identifier: Apache-2.0
 */
var express = require("express");
var bodyParser = require("body-parser");
var dbroutes = require("./rest/dbroutes.js");
var dashboardroutes = require("./rest/dashboardroutes.js");
var config = require("./config.json");
var PersistanceFactory = require("../persistance/PersistanceFactory.js");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

class BlockchainApp {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this.persistance = {};
    }

    getApp() {
        return this.app;
    }

    async initialize() {
        this.persistance = await PersistanceFactory.create(config["persistance"]);
        dbroutes(this.app, this.persistance);
        dashboardroutes(this.app, this.persistance);
    }
}

module.exports = BlockchainApp;