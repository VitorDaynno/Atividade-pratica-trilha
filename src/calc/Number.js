var logger = require('winston');

module.exports = function() {

    return {
        sum: function(a, b) {
            if (!Number.isInteger(a) || !Number.isInteger(b)) {
                throw 'Only integer numbers is permitted';
            }

            logger.info('[Number] Adding numbers ' + a + ' and ' + b);
            return a + b;
        },
        divide: function(a, b) {
            if (b === 0) {
                throw 'Zero in divisor is not permitted';
            }
            if (!Number.isInteger(a) || !Number.isInteger(b)) {
                throw 'Only integer numbers is permitted';
            }
            logger.info('[Number] Divide numbers ' + a + ' to ' + b);
            return a/b;
        }
    };
};
