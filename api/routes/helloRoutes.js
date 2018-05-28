'use strict';

module.exports = function(app) {
  const helloController = require('../controllers/helloController.js');

  app.route('/hello')
    .get(helloController.getAll)
    .post(helloController.create);

};