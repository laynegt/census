import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | grid-cartogram', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('selectState', () => {
      undefined;
    });

    await render(hbs`<GridCartogram @selectState={{this.selectState}}/>`);

    assert.ok(this.element.textContent.trim());
  });
});
