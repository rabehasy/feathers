const { authenticate } = require('@feathersjs/authentication').hooks;

const flyersHook = require('../../hooks/flyers');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [flyersHook()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
