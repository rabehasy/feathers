const { authenticate } = require('@feathersjs/authentication').hooks;

const regionHook = require('../../hooks/region');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [regionHook()],
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
