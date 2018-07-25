var logger = require('winston');
var calculateBO = require('../../business/calculateBO')();

module.exports = function() {
    return {
        sum: function(req, res) {
            logger.info('[controllers-calculate] Calculate sum');
            var body = req.body ? req.body: {};
            calculateBO.sum(body)
                .then(function(r){
                    logger.info('[controllers-calculate] Calculate sum with success ', r);
                    res.status(200).json({total: r});
                })
                .catch(function(error){
                    logger.error('[controllers-calculate]', JSON.stringify(error));
                    res.status(error.code).json({errorCode: error.code, message: error.message});
                });
        },
        average: function(req, res) {
            logger.info('[controllers-calculate] Calculate average');
            var body = req.body ? req.body: {};
            calculateBO.average(body)
                .then(function(r){
                    logger.info('[controllers-calculate] Calculate average with success ', r);
                    res.status(200).json({total: r});
                })
                .catch(function(error){
                    logger.error('[controllers-calculate]', JSON.stringify(error));
                    res.status(error.code).json({errorCode: error.code, message: error.message});
                });
        }
    };
};
