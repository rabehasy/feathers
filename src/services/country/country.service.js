// Initializes the `country` service on path `/api/country`
const createService = require('feathers-sequelize');
const createModel = require('../../models/country.model');
const hooks = require('./country.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/country', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/country');

  service.hooks(hooks);
};
