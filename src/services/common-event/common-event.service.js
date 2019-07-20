// Initializes the `commonEvent` service on path `/api/common-event`
const createService = require('feathers-sequelize');
const createModel = require('../../models/common-event.model');
const hooks = require('./common-event.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/common-event', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/common-event');

  service.hooks(hooks);
};
