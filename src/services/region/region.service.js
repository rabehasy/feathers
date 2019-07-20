// Initializes the `region` service on path `/api/region`
const createService = require('feathers-sequelize');
const createModel = require('../../models/region.model');
const hooks = require('./region.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/region', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/region');

  service.hooks(hooks);
};
