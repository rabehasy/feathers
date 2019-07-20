// Initializes the `thematique` service on path `/api/thematique`
const createService = require('feathers-sequelize');
const createModel = require('../../models/thematique.model');
const hooks = require('./thematique.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/thematique', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/thematique');

  service.hooks(hooks);
};
