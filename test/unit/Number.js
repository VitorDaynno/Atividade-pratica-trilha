var chai    = require('chai');
var expect  = chai.expect;
var Number = require('../../src/calc/Number.js');

describe('Number', function(){

    var number = new Number();

    describe('sum', function(){

        it('Sum with success', function(){
            var result = number.sum(2,3);
            return expect(result).to.be.equal(5);
        });

        it('Sum with negative numbers', function(){
            var result = number.sum(-2,5);
            return expect(result).to.be.equal(3);
        });

        it('Sum with float numbers', function(){
            try {
                number.sum(4.5,5);
            } catch (error) {
                return expect(error).to.be.equal('Only integer numbers is permitted');
            }
        });

    });

    describe('divide', function() {

        it('Divide with success', function(){
            var result = number.divide(10,5);
            return expect(result).to.be.equal(2);
        });

        it('Divide with negative numbers', function(){
            var result = number.divide(-10,-2);
            return expect(result).to.be.equal(5);
        });

        it('Divide with zero in divisor', function(){
            try {
                number.divide(20,0);
            } catch (error) {
                return expect(error).to.be.equal('Zero in divisor is not permitted');
            }
        });

        it('Divide with float numbers', function(){
            try {
                number.divide(20,5.2);
            } catch (error) {
                return expect(error).to.be.equal('Only integer numbers is permitted');
            }
        });
    });
});
