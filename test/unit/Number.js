var Number = require('../../src/calc/Number.js');

describe('Number', function(){

    var number = new Number();

    describe('sum', function(){

        it('Sum with success', function(){
            return number.sum(2,3)
                .then(function(result){
                    expect(result).to.be.equal(5);
                });
        });

        it('Sum with negative numbers', function(){
            return number.sum(-2,5)
                .then(function(result){
                    expect(result).to.be.equal(3);
                });
        });

        it('Sum with float numbers', function(){
            return number.sum(4.5,5)
                .then()
                .catch(function(error){
                    expect(error).to.be.equal('Only integer numbers is permitted');
                });
        });

    });

    describe('divide', function() {

        it('Divide with success', function(){
            return number.divide(10,5)
                .then(function(result){
                    expect(result).to.be.equal(2);
                });
        });

        it('Divide with negative numbers', function(){
            return number.divide(-10,-2)
                .then(function(result){
                    expect(result).to.be.equal(5);
                });
        });

        it('Divide with zero in divisor', function(){
            return number.divide(20,0)
                .then()
                .catch(function(error){
                    expect(error).to.be.equal('Zero in divisor is not permitted');
                });
        });

        it('Divide with float numbers', function(){
            return number.divide(20,5.2)
                .then()
                .catch(function(error){
                    expect(error).to.be.equal('Only integer numbers is permitted');
                });
        });
    });
});
