describe('Number', function(){

    var number = new Number();

    describe('Sum', function(){

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

    });
});
