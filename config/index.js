let configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {return 'mongodb://' + configValues.uName + ':' + configValues.pWord + '@ds147684.mlab.com:47684/testing';
    }













}