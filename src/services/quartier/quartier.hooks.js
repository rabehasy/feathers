const { authenticate } = require('@feathersjs/authentication').hooks;

const quartierHook = require('../../hooks/quartier');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [quartierHook()],
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
