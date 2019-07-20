const assert = require('assert');
const app = require('../../src/app');

describe('\'thematique\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/thematique');

    assert.ok(service, 'Registered the service');
  });
});
