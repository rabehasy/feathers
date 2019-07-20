const { authenticate } = require('@feathersjs/authentication').hooks;

const commonEventHook = require('../../hooks/common-event');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [commonEventHook()],
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
