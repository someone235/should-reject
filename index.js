/**
 * Created by ori on 16/07/16.
 */
var Promise = require('bluebird');
var noop = require('lodash.noop');
module.exports = function shouldReject(promise) {
    return promise.then(function () {
        return Promise.reject();
    },noop);
};