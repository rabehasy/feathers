const { authenticate } = require('@feathersjs/authentication').hooks;

const countryHook = require('../../hooks/country');


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [countryHook()],
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
