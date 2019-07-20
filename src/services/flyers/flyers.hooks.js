const { authenticate } = require('@feathersjs/authentication').hooks;

const flyersEvent = require('../../hooks/flyers-event');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [flyersEvent()],
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
