'use strict';

const request = require('request');
request('https://cdn.hackerrank.com/hackerrank/static/contests/capture-the-flag/secret/key.json', function (err, req, body) {
    let ans = [];
    body = JSON.parse(body);
    for (let key in body) {
        request('https://cdn.hackerrank.com/hackerrank/static/contests/capture-the-flag/secret/secret_json/' + key + '.json', function (e, r, b) {
            b = JSON.parse(b);
            ans.push(b.news_title);
            ans.sort();
        });
    }
});