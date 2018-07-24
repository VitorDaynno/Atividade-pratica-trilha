var logger = require('winston');
//var calculateBO = require('../../business/calculateBO')();

module.exports = function() {
    return {
        sum: function(req, res) {
            logger.log('info','[controllers-calculate] Calculate sum');
            res.status(200).json({});
        }
    };
};
