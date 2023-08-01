import { module, test } from 'qunit';
import { setupRenderingTest } from 'ejemplo1/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | students-enrolled', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<StudentsEnrolled />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <StudentsEnrolled>
        template block text
      </StudentsEnrolled>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
