/**
 * Created by ori on 16/07/16.
 */
var Promise = require('bluebird');
module.exports = function shouldReject(promise) {
    return promise.then(function () {
        return Promise.reject();
    },function (e) {
        return e;
    });
};