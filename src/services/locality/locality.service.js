// Initializes the `locality` service on path `/api/locality`
const createService = require('feathers-sequelize');
const createModel = require('../../models/locality.model');
const hooks = require('./locality.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/locality', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/locality');

  service.hooks(hooks);
};
