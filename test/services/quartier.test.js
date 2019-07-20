const assert = require('assert');
const app = require('../../src/app');

describe('\'quartier\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/quartier');

    assert.ok(service, 'Registered the service');
  });
});
