// Initializes the `quartier` service on path `/api/quartier`
const createService = require('feathers-sequelize');
const createModel = require('../../models/quartier.model');
const hooks = require('./quartier.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/quartier', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/quartier');

  service.hooks(hooks);
};
