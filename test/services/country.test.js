const assert = require('assert');
const app = require('../../src/app');

describe('\'country\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/country');

    assert.ok(service, 'Registered the service');
  });
});
