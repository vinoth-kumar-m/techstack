/*
*SPDX-License-Identifier: Apache-2.0
*/

var Platform = require('./dummy/Platform.js');

class PlatformBuilder {

    static build(pltfrm) {

        if(pltfrm == 'dummy') {
            var platform = new Platform();
            platform.initialize();
            return platform;
        }

        throw("Invalid Platform");
    }
}

module.exports = PlatformBuilder;