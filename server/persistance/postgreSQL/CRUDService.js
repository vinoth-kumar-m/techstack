/**
 *    SPDX-License-Identifier: Apache-2.0
 */

var sql = require('./db/pgservice.js');

class CRUDService {

    constructor() { }

    getAll() {
        return sql.getRowsBySQlQuery(`select id, username, firstName, lastName, role, status from users where status = 'ACTIVE' order by id asc`);
    }

    getUser(username, password) {
        return sql.getRowByPkOne(`select id, username, firstName, lastName, role, status from users where username = '${username}' and password = '${password}'  and status = 'ACTIVE'`);
    }

}

module.exports = CRUDService;