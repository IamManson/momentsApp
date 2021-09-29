let expect = require('chai').expect;
let request = require('request');

describe('Status and content', function() {
    describe('Posts page', function() {
        it('status', function(done) {
            request('http://localhost:5000/posts',
                    function(error, response, body) {
                        expect(response.statusCode).to.equal(200);
                        done();
                    });
        });
        it('content', function(done) {
            request('http://localhost:5000/posts',
            function(error, response, body) {
                expect(body).to.equal('respond with a resource');
                done();
            });
        });
    });
});

let assert = require('assert');
assert(5>7);