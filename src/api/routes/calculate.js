module.exports = function(app) {
    var controller = app.controllers.calculate;

    app.route('/v1/calculations/sum')
        .post(controller.sum);
};
