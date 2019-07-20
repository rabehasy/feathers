const assert = require('assert');
const app = require('../../src/app');

describe('\'fos_users\' service', () => {
  it('registered the service', () => {
    const service = app.service('fos_users');

    assert.ok(service, 'Registered the service');
  });
});
