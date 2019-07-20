const assert = require('assert');
const app = require('../../src/app');

describe('\'lieu\' service', () => {
  it('registered the service', () => {
    const service = app.service('apilieu');

    assert.ok(service, 'Registered the service');
  });
});
