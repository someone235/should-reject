/**
 * Created by ori on 16/07/16.
 */
var test = require('tap').test;
var Promise = require('bluebird');
var shouldReject = require('./index.js');

var REJECT_REASON = 'REJECT_REASON';

test('Check should-reject', function (t) {
    return t.test('it should be resolved', function () {
        return shouldReject(Promise.reject(REJECT_REASON))
            .then(function (reason) {
                t.ok(reason === REJECT_REASON);
            });
    });
}).then(function (t) {
    return t.test('it should be rejected', function () {
        return shouldReject(Promise.resolve()).catch(function (err) {
            t.ok(err.message === 'Promise resolved')
        });
    });
});