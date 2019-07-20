// Initializes the `flyers` service on path `/flyers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/flyers.model');
const hooks = require('./flyers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/flyers', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/flyers');

  service.hooks(hooks);
};
