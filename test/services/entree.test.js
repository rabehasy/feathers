const assert = require('assert');
const app = require('../../src/app');

describe('\'entree\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/entree');

    assert.ok(service, 'Registered the service');
  });
});
