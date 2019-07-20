// Initializes the `artistes` service on path `/api/artistes`
const createService = require('feathers-sequelize');
const createModel = require('../../models/artistes.model');
const hooks = require('./artistes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/artistes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/artistes');

  service.hooks(hooks);
};
