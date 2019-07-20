const assert = require('assert');
const app = require('../../src/app');

describe('\'commonEvent\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/common-event');

    assert.ok(service, 'Registered the service');
  });
});
