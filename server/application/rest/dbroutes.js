/**
*    SPDX-License-Identifier: Apache-2.0
*/

var requtil = require("./requestutils.js");
const dbroutes = (app, persist) => {

  var crudService = persist.getCrudService();

  app.get("/api/users", async function (req, res) {
    var users = await crudService.getAll();
    if (users) {
      return res.send({
        status: 200,
        users
      });
    }
    return requtil.notFound(req, res);
  });


  app.post("/api/userAuthenticate", async function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
      var user = await crudService.getUser(username, password);
      if (user) {
        return res.send({
          status: 200,
          user
        });
      } else {
        return res.send({
          status: 404,
          message: "Username or Password is incorrect"
        });
      }
    } else {
      return requtil.invalidRequest(req, res);
    }
  });
}

module.exports = dbroutes;