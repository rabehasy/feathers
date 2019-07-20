// Initializes the `api` service on path `/api/api`
const createService = require('feathers-sequelize');
const createModel = require('../../models/api.model');
const hooks = require('./api.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/api', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/api');

  service.hooks(hooks);
};
