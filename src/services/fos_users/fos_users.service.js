// Initializes the `fos_users` service on path `/fos_users`
const createService = require('feathers-sequelize');
const createModel = require('../../models/fos_users.model');
const hooks = require('./fos_users.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/fos_users', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('fos_users');

  service.hooks(hooks);
};
