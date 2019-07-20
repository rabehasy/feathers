const { authenticate } = require('@feathersjs/authentication').hooks;

const eventHook = require('../../hooks/event');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [eventHook()],
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
