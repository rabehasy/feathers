// Initializes the `date` service on path `/api/date`
const createService = require('feathers-sequelize');
const createModel = require('../../models/date.model');
const hooks = require('./date.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/date', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/date');

  service.hooks(hooks);
};
