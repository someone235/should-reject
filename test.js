/**
 * Created by ori on 16/07/16.
 */
var test = require('tap').test;
var Promise = require('bluebird');
var shouldReject = require('./index.js');
var noop = require('lodash.noop');

test('Check should-reject', function (t) {
    return t.test('it should be resolved', function () {
        return shouldReject(Promise.reject());
    })
}).then(function (t) {
    return t.test('it should be rejected', function () {
        return shouldReject(Promise.resolve()).catch(noop);
    })
});