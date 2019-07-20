const assert = require('assert');
const app = require('../../src/app');

describe('\'locality\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/locality');

    assert.ok(service, 'Registered the service');
  });
});
