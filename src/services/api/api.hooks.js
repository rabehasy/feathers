const { authenticate } = require('@feathersjs/authentication').hooks;

const apiEvent = require('../../hooks/api-event');


module.exports = {
  before: {
    all: [],
    find: [apiEvent()],
    get: [apiEvent()],
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
