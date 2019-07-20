const assert = require('assert');
const app = require('../../src/app');

describe('\'region\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/region');

    assert.ok(service, 'Registered the service');
  });
});
