module.exports = function(app) {
    var controller = app.controllers.calculate;

    app.route('/v1/calculations/sum')
        .post(controller.sum);
    app.route('/v1/calculations/average')
        .post(controller.average);
};
