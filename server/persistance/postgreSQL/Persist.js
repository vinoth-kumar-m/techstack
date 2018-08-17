/**
*    SPDX-License-Identifier: Apache-2.0
*/

var CRUDService = require('./CRUDService.js');
var pgservice = require('./db/pgservice.js');

class Persist {

    constructor() { }

    async initialize() {
        await pgservice.handleDisconnect();
        this.crudService = new CRUDService();
    }

    getCrudService() {
        return this.crudService;
    }

}

module.exports = Persist;