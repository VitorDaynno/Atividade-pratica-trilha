var logger = require('winston');
var Promise = require('promise');
var Number = require('../calc/Number');

module.exports = function() {

    var number = new Number();

    return {
        sum: function(values) {
            return new Promise(function (resolve, reject){
                logger.info('[Numbers] Calculate sum');
                var chain = Promise.resolve();

                chain
                    .then(function(){
                        logger.info('[Numbers] Initiating validations');
                        if (values.length > 1) {
                            logger.info('[Numbers] the array contains ' + values.length + ' elements');
                            return values;
                        } else {
                            throw 'The array must contain at least two numbers';
                        }
                    })
                    .then(function (r){
                        logger.info('[Numbers] Calculating total');
                        var total = 0;
                        r.forEach(function(item){
                            total = number.sum(total, item);
                        });

                        resolve(total);
                    })
                    .catch(function(error){
                        logger.error('[Numbers] ', error);
                        reject(error);
                    });
            });
        },
        average: function(values) {
            return new Promise(function (resolve, reject){
                logger.info('[Numbers] Calculate average');
                var chain = Promise.resolve();

                chain
                    .then(function(){
                        logger.info('[Numbers] Initiating validations');
                        if (values.length > 1) {
                            logger.info('[Numbers] the array contains ' + values.length + ' elements');
                            return values;
                        } else {
                            throw 'The array must contain at least two numbers';
                        }
                    })
                    .then(function (r){
                        logger.info('[Numbers] Calculating total');
                        var total = 0;
                        r.forEach(function(item){
                            total = number.sum(total, item);
                        });

                        return total;
                    })
                    .then(function(total){
                        logger.info('[Numbers] Calculating average');
                        return number.divide(total, values.length);
                    })
                    .then(function(r){
                        resolve(r);
                    })
                    .catch(function(error){
                        logger.error('[Numbers] ', error);
                        reject(error);
                    });
            });
        }
    };
};
