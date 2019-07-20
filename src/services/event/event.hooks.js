const { authenticate } = require('@feathersjs/authentication').hooks;

const eventApi = require('../../hooks/event-api');
const eventFlyers = require('../../hooks/event-flyers');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [eventApi(), eventFlyers()],
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
