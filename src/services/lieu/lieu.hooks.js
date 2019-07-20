const { authenticate } = require('@feathersjs/authentication').hooks;

const lieuHook = require('../../hooks/lieu');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [lieuHook()],
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
