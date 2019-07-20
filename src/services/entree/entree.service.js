// Initializes the `entree` service on path `/api/entree`
const createService = require('feathers-sequelize');
const createModel = require('../../models/entree.model');
const hooks = require('./entree.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/entree', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/entree');

  service.hooks(hooks);
};
