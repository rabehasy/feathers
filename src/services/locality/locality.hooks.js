const { authenticate } = require('@feathersjs/authentication').hooks;

const localityHook = require('../../hooks/locality');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [localityHook()],
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
