const assert = require('assert');
const app = require('../../src/app');

describe('\'event\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/event');

    assert.ok(service, 'Registered the service');
  });
});
