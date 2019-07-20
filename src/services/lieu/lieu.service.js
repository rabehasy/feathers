// Initializes the `lieu` service on path `/apilieu`
const createService = require('feathers-sequelize');
const createModel = require('../../models/lieu.model');
const hooks = require('./lieu.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/apilieu', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('apilieu');

  service.hooks(hooks);
};
