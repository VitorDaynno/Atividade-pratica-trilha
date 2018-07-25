var logger = require('winston');
var Promise = require('promise');
var Numbers = require('../calc/Numbers');

module.exports = function() {

    var numbers = new Numbers();

    return {
        sum: function(body) {
            return new Promise(function (resolve, reject){
                logger.info('[calculateBO] Calculate sum');
                var chain = Promise.resolve();

                chain
                    .then(function(){
                        if (body.values) {
                            return body.values;
                        } else {
                            throw 'The body not contains a property named values';
                        }
                    })
                    .then(function(values){
                        logger.info('[calculateBO] Starting sum with ', values);
                        return numbers.sum(values);
                    })
                    .then(function (r){
                        logger.info('[calculateBO] Sum returned with success', r);
                        resolve(r);
                    })
                    .catch(function(error){
                        logger.error('[calculateBO] ', error);
                        if (error === 'The array must contain at least two numbers') {
                            reject({code:422, message: error});
                        } else if (error === 'The body not contains a property named values') {
                            reject({code:422, message: error});
                        } else if (error === 'Only integer numbers is permitted') {
                            reject({code:409, message: error});
                        } else {
                            reject({code:500, message: error});
                        }
                    });
            });
        },

        average: function(body) {
            return new Promise(function (resolve, reject){
                logger.info('[calculateBO] Calculate average');
                var chain = Promise.resolve();

                chain
                    .then(function(){
                        if (body.values) {
                            return body.values;
                        } else {
                            throw 'The body not contains a property named values';
                        }
                    })
                    .then(function(values){
                        logger.info('[calculateBO] Starting average with ', values);
                        return numbers.average(values);
                    })
                    .then(function (r){
                        logger.info('[calculateBO] Average returned with success', r);
                        resolve(r);
                    })
                    .catch(function(error){
                        logger.error('[calculateBO] ', error);
                        if (error === 'The array must contain at least two numbers') {
                            reject({code:422, message: error});
                        } else if (error === 'The body not contains a property named values') {
                            reject({code:422, message: error});
                        } else if (error === 'Only integer numbers is permitted') {
                            reject({code:409, message: error});
                        } else {
                            reject({code:500, message: error});
                        }
                    });
            });
        }
    };
};
