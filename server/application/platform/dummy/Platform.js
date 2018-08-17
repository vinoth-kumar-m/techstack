/**
 *    SPDX-License-Identifier: Apache-2.0
 */

var path = require("path");
var helper = require("../../../helper.js");
var logger = helper.getLogger("platform");

class Platform {
    constructor() {

    }

    initialize() {

    }

    getStatistics() {
        return {
            'blockCount': Math.floor(Math.random() * 100),
            'txnCount': Math.floor(Math.random() * 1000),
            'contractCount': Math.floor(Math.random() * 50),
            'peerCount': Math.floor(Math.random() * 100),
        }
    }

    getTxnPerHour() {
        return {
            'rows': [
                { 'key': '2018-05-14T05:00:00.000Z', 'value': Math.floor(Math.random() * 100) }, { 'key': '2018-05-14T06:00:00.000Z', 'value': Math.floor(Math.random() * 100) },
                { 'key': '2018-05-14T07:00:00.000Z', 'value': Math.floor(Math.random() * 100) }, { 'key': '2018-05-14T08:00:00.000Z', 'value': Math.floor(Math.random() * 100) },
                { 'key': '2018-05-14T09:00:00.000Z', 'value': Math.floor(Math.random() * 100) }, { 'key': '2018-05-14T10:00:00.000Z', 'value': Math.floor(Math.random() * 100) },
                { 'key': '2018-05-14T11:00:00.000Z', 'value': Math.floor(Math.random() * 100) }, { 'key': '2018-05-14T12:00:00.000Z', 'value': Math.floor(Math.random() * 100) },
                { 'key': '2018-05-14T13:00:00.000Z', 'value': Math.floor(Math.random() * 100) }, { 'key': '2018-05-14T14:00:00.000Z', 'value': Math.floor(Math.random() * 100) },
                { 'key': '2018-05-14T15:00:00.000Z', 'value': Math.floor(Math.random() * 100) }]
        }
    }

    getTxnPerMin() {
        return {
            'rows': [{ 'key': '2018-05-14T17:10:00.000Z', 'value': Math.floor(Math.random() * 10) },
                { 'key': '2018-05-14T17:11:00.000Z', 'value': Math.floor(Math.random() * 10) }, { 'key': '2018-05-14T17:12:00.000Z', 'value': Math.floor(Math.random() * 10) },
                { 'key': '2018-05-14T17:13:00.000Z', 'value': Math.floor(Math.random() * 10) }, { 'key': '2018-05-14T17:14:00.000Z', 'value': Math.floor(Math.random() * 10) },
                { 'key': '2018-05-14T17:15:00.000Z', 'value': Math.floor(Math.random() * 10) }, { 'key': '2018-05-14T17:16:00.000Z', 'value': Math.floor(Math.random() * 10) },
                { 'key': '2018-05-14T17:17:00.000Z', 'value': Math.floor(Math.random() * 10) }, { 'key': '2018-05-14T17:18:00.000Z', 'value': Math.floor(Math.random() * 10) },
                { 'key': '2018-05-14T17:19:00.000Z', 'value': Math.floor(Math.random() * 10) }, { 'key': '2018-05-14T17:20:00.000Z', 'value': Math.floor(Math.random() * 10) },
                { 'key': '2018-05-14T17:21:00.000Z', 'value': Math.floor(Math.random() * 10) }, { 'key': '2018-05-14T17:22:00.000Z', 'value': Math.floor(Math.random() * 10) },
                { 'key': '2018-05-14T17:23:00.000Z', 'value': Math.floor(Math.random() * 10) }]
        }
    }

    getTxnPerOrg() {
        return {
            'rows': [
                {
                    'value': Math.floor(Math.random() * 10),
                    'key': 'Org1'
                },
                {
                    'value': Math.floor(Math.random() * 20),
                    'key': 'Org2'
                },
                {
                    'value': Math.floor(Math.random() * 30),
                    'key': 'Org3'
                },
                {
                    'value': Math.floor(Math.random() * 40),
                    'key': 'Org4'
                }
            ]
        }
    }

    getTransactions() {
        return {
            'rows': [
                {
                    id: 1,
                    blockid: 20,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 41,
                    read_set: [],
                    status: 200,
                    txhash:
                      "308a24cc218085f16e12af38bf54a72beec0b85e98f971b1e0819592f74deb80",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 2,
                    blockid: 20,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 40,
                    read_set: [],
                    status: 200,
                    txhash:
                      "9abc8cb27439b256fa38384ee98e34da75f5433cfc21a45a77f98dcbc6bddbb1",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 3,
                    blockid: 19,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 39,
                    read_set: [],
                    status: 200,
                    txhash:
                      "912cd6e7624313675cb1806e2ce0243bbeff247792f2c7aae857a8c5436074f6",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 4,
                    blockid: 20,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 41,
                    read_set: [],
                    status: 200,
                    txhash:
                      "308a24cc218085f16e12af38bf54a72beec0b85e98f971b1e0819592f74deb80",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 5,
                    blockid: 20,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 40,
                    read_set: [],
                    status: 200,
                    txhash:
                      "9abc8cb27439b256fa38384ee98e34da75f5433cfc21a45a77f98dcbc6bddbb1",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 6,
                    blockid: 19,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 39,
                    read_set: [],
                    status: 200,
                    txhash:
                      "912cd6e7624313675cb1806e2ce0243bbeff247792f2c7aae857a8c5436074f6",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 7,
                    blockid: 20,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 41,
                    read_set: [],
                    status: 200,
                    txhash:
                      "308a24cc218085f16e12af38bf54a72beec0b85e98f971b1e0819592f74deb80",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 8,
                    blockid: 20,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 40,
                    read_set: [],
                    status: 200,
                    txhash:
                      "9abc8cb27439b256fa38384ee98e34da75f5433cfc21a45a77f98dcbc6bddbb1",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 9,
                    blockid: 19,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 39,
                    read_set: [],
                    status: 200,
                    txhash:
                      "912cd6e7624313675cb1806e2ce0243bbeff247792f2c7aae857a8c5436074f6",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 10,
                    blockid: 20,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 41,
                    read_set: [],
                    status: 200,
                    txhash:
                      "308a24cc218085f16e12af38bf54a72beec0b85e98f971b1e0819592f74deb80",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 11,
                    blockid: 20,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 40,
                    read_set: [],
                    status: 200,
                    txhash:
                      "9abc8cb27439b256fa38384ee98e34da75f5433cfc21a45a77f98dcbc6bddbb1",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  },
                  {
                    id: 12,
                    blockid: 19,
                    chaincode_id: "",
                    chaincodename: "mycc",
                    channelname: "mychannel",
                    createdt: "4-26-2018 4:32 PM EDT",
                    creator: "Org1MSP",
                    endorser_msp_id: "{'Org1MSP'}",
                    id: 39,
                    read_set: [],
                    status: 200,
                    txhash:
                      "912cd6e7624313675cb1806e2ce0243bbeff247792f2c7aae857a8c5436074f6",
                    type: "ENDORSER_TRANSACTION",
                    write_set: []
                  }
            ]
        }
    }

}



module.exports = Platform;