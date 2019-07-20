const api = require('./api/api.service.js');
const users = require('./users/users.service.js');
const fosUsers = require('./fos_users/fos_users.service.js');
const event = require('./event/event.service.js');
const flyers = require('./flyers/flyers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(api);
  app.configure(users);
  app.configure(fosUsers);
  app.configure(event);
  app.configure(flyers);
};
