import { module, test } from 'qunit';
import { setupTest } from 'ejemplo1/tests/helpers';

module('Unit | Controller | students', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:students');
    assert.ok(controller);
  });
});
