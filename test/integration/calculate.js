var request = require('supertest');
var chai    = require('chai');
var expect  = chai.expect;

describe('calculations', function(){
    var server;


    before(function(){
        server = require('../../src/server');
    });

    after(function(){
        server.close();
    });

    describe('/v1/calculations/sum', function(){

        describe('Calculate sum', function(){

            it('Should return error when array is empty', function(){
                return request(server)
                    .post('/v1/calculations/sum')
                    .send({
                        values: []
                    })
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(422);
            });

            it('Should return error when body not exist', function(){
                return request(server)
                    .post('/v1/calculations/sum')
                    .send({})
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(422);
            });

            it('Should return 41 as a response', function(){
                return request(server)
                    .post('/v1/calculations/sum')
                    .send({
                        values: [10, 5, 5, 11, 7, 3]
                    })
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .then(function(res){
                       expect(res.body.total).to.be.equal(41);
                    });
            });
        });

        describe('Calculate average', function(){

            it('Should return error when array is empty', function(){
                return request(server)
                    .post('/v1/calculations/average')
                    .send({
                        values: []
                    })
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(422);
            });

            it('Should return error when body not exist', function(){
                return request(server)
                    .post('/v1/calculations/average')
                    .send({})
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(422);
            });

            it('Should return 164.75 as a response', function(){
                return request(server)
                    .post('/v1/calculations/sum')
                    .send({
                        values: [54, 515, 85, 5]
                    })
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .then(function(res){
                       expect(res.body.total).to.be.equal(164.75);
                    });
            });
        });
    });
});
