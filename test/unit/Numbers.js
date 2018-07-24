var Numbers = require('../../src/calc/Numbers.js');

describe('Numbers', function(){

    var numbers = new Numbers();

    describe('sum', function(){

        it('Sum with success', function(){
            return numbers.sum([1,2,3,4])
                .then(function(result){
                    expect(result).to.be.equal(10);
                });
        });

        it('Sum with negative numbers', function(){
            return numbers.sum([1,-3,5])
                .then(function(result){
                    expect(result).to.be.equal(3);
                });
        });

        it('Sum with float numbers', function(){
            return numbers.sum([4.5,5])
                .then()
                .catch(function(error){
                    expect(error).to.be.equal('Only integer numbers is permitted');
                });
        });

        it('Sum with empty array', function(){
            return numbers.sum([])
                .then()
                .catch(function(error){
                    expect(error).to.be.equal('The array must contain at least two numbers');
                });
        });

    });

    describe('average', function() {

        it('Calculate average with success', function(){
            return numbers.average([10,5])
                .then(function(result){
                    expect(result).to.be.equal(7.5);
                });
        });

        it('Calculate average with negative numbers', function(){
            return numbers.average([-10,-2])
                .then(function(result){
                    expect(result).to.be.equal(-6);
                });
        });

        it('Calculate with float numbers', function(){
            return number.divide([20,5.2])
                .then()
                .catch(function(error){
                    expect(error).to.be.equal('Only integer numbers is permitted');
                });
        });

        it('Calculate average with empty array', function(){
            return numbers.average([])
                .then()
                .catch(function(error){
                    expect(error).to.be.equal('The array must contain at least two numbers');
                });
        });
    });
});
