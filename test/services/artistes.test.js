const assert = require('assert');
const app = require('../../src/app');

describe('\'artistes\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/artistes');

    assert.ok(service, 'Registered the service');
  });
});
