import { module, test } from 'qunit';
import { visit, click, triggerEvent } from '@ember/test-helpers';
import { setupApplicationTest } from 'census/tests/helpers';
import percySnapshot from '@percy/ember';

module('Acceptance | interactions', function (hooks) {
  setupApplicationTest(hooks);

  test('usa is usa shaped', async function (assert) {
    assert.expect(98);

    await visit('/');
    await percySnapshot('usa');

    assert.dom('.usa .grid:nth-child(1)').hasNoText();
    assert.dom('.usa .grid:nth-child(2)').hasNoText();
    assert.dom('.usa .grid:nth-child(3)').hasNoText();
    assert.dom('.usa .grid:nth-child(4)').hasNoText();
    assert.dom('.usa .grid:nth-child(5)').hasNoText();
    assert.dom('.usa .grid:nth-child(6)').hasNoText();
    assert.dom('.usa .grid:nth-child(7)').hasNoText();
    assert.dom('.usa .grid:nth-child(8)').hasNoText();
    assert.dom('.usa .grid:nth-child(9)').hasNoText();
    assert.dom('.usa .grid:nth-child(10)').hasNoText();
    assert.dom('.usa .grid:nth-child(11)').hasNoText();
    assert.dom('.usa .grid:nth-child(12)').hasText('ME 0');

    assert.dom('.usa .grid:nth-child(13)').hasNoText();
    assert.dom('.usa .grid:nth-child(14)').hasNoText();
    assert.dom('.usa .grid:nth-child(15)').hasNoText();
    assert.dom('.usa .grid:nth-child(16)').hasNoText();
    assert.dom('.usa .grid:nth-child(17)').hasNoText();
    assert.dom('.usa .grid:nth-child(18)').hasText('WI 0');
    assert.dom('.usa .grid:nth-child(19)').hasNoText();
    assert.dom('.usa .grid:nth-child(20)').hasNoText();
    assert.dom('.usa .grid:nth-child(21)').hasNoText();
    assert.dom('.usa .grid:nth-child(22)').hasNoText();
    assert.dom('.usa .grid:nth-child(23)').hasText('VT 0');
    assert.dom('.usa .grid:nth-child(24)').hasText('NH 0');

    assert.dom('.usa .grid:nth-child(25)').hasNoText();
    assert.dom('.usa .grid:nth-child(26)').hasText('WA 0');
    assert.dom('.usa .grid:nth-child(27)').hasText('ID 0');
    assert.dom('.usa .grid:nth-child(28)').hasText('MT 0');
    assert.dom('.usa .grid:nth-child(29)').hasText('ND 0');
    assert.dom('.usa .grid:nth-child(30)').hasText('MN 0');
    assert.dom('.usa .grid:nth-child(31)').hasText('IL 0');
    assert.dom('.usa .grid:nth-child(32)').hasText('MI 0');
    assert.dom('.usa .grid:nth-child(33)').hasNoText();
    assert.dom('.usa .grid:nth-child(34)').hasText('NY 0');
    assert.dom('.usa .grid:nth-child(35)').hasText('MA 0');
    assert.dom('.usa .grid:nth-child(36)').hasNoText();

    assert.dom('.usa .grid:nth-child(37)').hasNoText();
    assert.dom('.usa .grid:nth-child(38)').hasText('OR 0');
    assert.dom('.usa .grid:nth-child(39)').hasText('NV 0');
    assert.dom('.usa .grid:nth-child(40)').hasText('WY 0');
    assert.dom('.usa .grid:nth-child(41)').hasText('SD 0');
    assert.dom('.usa .grid:nth-child(42)').hasText('IA 0');
    assert.dom('.usa .grid:nth-child(43)').hasText('IN 0');
    assert.dom('.usa .grid:nth-child(44)').hasText('OH 0');
    assert.dom('.usa .grid:nth-child(45)').hasText('PA 0');
    assert.dom('.usa .grid:nth-child(46)').hasText('NJ 0');
    assert.dom('.usa .grid:nth-child(47)').hasText('CT 0');
    assert.dom('.usa .grid:nth-child(48)').hasText('RI 0');

    assert.dom('.usa .grid:nth-child(49)').hasNoText();
    assert.dom('.usa .grid:nth-child(50)').hasText('CA 0');
    assert.dom('.usa .grid:nth-child(51)').hasText('UT 0');
    assert.dom('.usa .grid:nth-child(52)').hasText('CO 0');
    assert.dom('.usa .grid:nth-child(53)').hasText('NE 0');
    assert.dom('.usa .grid:nth-child(54)').hasText('MO 0');
    assert.dom('.usa .grid:nth-child(55)').hasText('KY 0');
    assert.dom('.usa .grid:nth-child(56)').hasText('WV 0');
    assert.dom('.usa .grid:nth-child(57)').hasText('VA 0');
    assert.dom('.usa .grid:nth-child(58)').hasText('MD 0');
    assert.dom('.usa .grid:nth-child(59)').hasText('DE 0');
    assert.dom('.usa .grid:nth-child(60)').hasNoText();

    assert.dom('.usa .grid:nth-child(61)').hasNoText();
    assert.dom('.usa .grid:nth-child(62)').hasNoText();
    assert.dom('.usa .grid:nth-child(63)').hasText('AZ 0');
    assert.dom('.usa .grid:nth-child(64)').hasText('NM 0');
    assert.dom('.usa .grid:nth-child(65)').hasText('KS 0');
    assert.dom('.usa .grid:nth-child(66)').hasText('AR 0');
    assert.dom('.usa .grid:nth-child(67)').hasText('TN 0');
    assert.dom('.usa .grid:nth-child(68)').hasText('NC 0');
    assert.dom('.usa .grid:nth-child(69)').hasText('SC 0');
    assert.dom('.usa .grid:nth-child(70)').hasNoText();
    assert.dom('.usa .grid:nth-child(71)').hasNoText();
    assert.dom('.usa .grid:nth-child(72)').hasNoText();

    assert.dom('.usa .grid:nth-child(73)').hasText('AK 0');
    assert.dom('.usa .grid:nth-child(74)').hasNoText();
    assert.dom('.usa .grid:nth-child(75)').hasNoText();
    assert.dom('.usa .grid:nth-child(76)').hasNoText();
    assert.dom('.usa .grid:nth-child(77)').hasText('OK 0');
    assert.dom('.usa .grid:nth-child(78)').hasText('LA 0');
    assert.dom('.usa .grid:nth-child(79)').hasText('MS 0');
    assert.dom('.usa .grid:nth-child(80)').hasText('AL 0');
    assert.dom('.usa .grid:nth-child(81)').hasText('GA 0');
    assert.dom('.usa .grid:nth-child(82)').hasNoText();
    assert.dom('.usa .grid:nth-child(83)').hasNoText();
    assert.dom('.usa .grid:nth-child(84)').hasNoText();

    assert.dom('.usa .grid:nth-child(85)').hasText('HI 0');
    assert.dom('.usa .grid:nth-child(86)').hasNoText();
    assert.dom('.usa .grid:nth-child(87)').hasNoText();
    assert.dom('.usa .grid:nth-child(88)').hasNoText();
    assert.dom('.usa .grid:nth-child(89)').hasText('TX 0');
    assert.dom('.usa .grid:nth-child(90)').hasNoText();
    assert.dom('.usa .grid:nth-child(91)').hasNoText();
    assert.dom('.usa .grid:nth-child(92)').hasNoText();
    assert.dom('.usa .grid:nth-child(93)').hasNoText();
    assert.dom('.usa .grid:nth-child(94)').hasText('FL 0');
    assert.dom('.usa .grid:nth-child(95)').hasNoText();
    assert.dom('.usa .grid:nth-child(96)').hasNoText();

    assert
      .dom('.usa .grid:nth-child(94) .state-cell')
      .hasStyle({ color: 'rgba(0, 0, 0, 0)' });

    // show labels
    await triggerEvent('.usa', 'mouseenter');

    await percySnapshot('usa w/ labels');

    assert
      .dom('.usa .grid:nth-child(94) .state-cell')
      .doesNotHaveStyle({ color: 'rgba(0, 0, 0, 0)' });
  });

  test('expected counts at 435', async function (assert) {
    assert.expect(50);

    await visit('/');
    await click('.tick.rank-384'); // click on grid, for now

    assert.dom('.usa .grid:nth-child(12)').hasText('ME 1');
    assert.dom('.usa .grid:nth-child(18)').hasText('WI 7');
    assert.dom('.usa .grid:nth-child(23)').hasText('VT 0');
    assert.dom('.usa .grid:nth-child(24)').hasText('NH 1');

    assert.dom('.usa .grid:nth-child(26)').hasText('WA 9');
    assert.dom('.usa .grid:nth-child(27)').hasText('ID 1');
    assert.dom('.usa .grid:nth-child(28)').hasText('MT 1');
    assert.dom('.usa .grid:nth-child(29)').hasText('ND 0');
    assert.dom('.usa .grid:nth-child(30)').hasText('MN 7');
    assert.dom('.usa .grid:nth-child(31)').hasText('IL 16');
    assert.dom('.usa .grid:nth-child(32)').hasText('MI 12');
    assert.dom('.usa .grid:nth-child(34)').hasText('NY 25');
    assert.dom('.usa .grid:nth-child(35)').hasText('MA 8');

    assert.dom('.usa .grid:nth-child(38)').hasText('OR 5');
    assert.dom('.usa .grid:nth-child(39)').hasText('NV 3');
    assert.dom('.usa .grid:nth-child(40)').hasText('WY 0');
    assert.dom('.usa .grid:nth-child(41)').hasText('SD 0');
    assert.dom('.usa .grid:nth-child(42)').hasText('IA 3');
    assert.dom('.usa .grid:nth-child(43)').hasText('IN 8');
    assert.dom('.usa .grid:nth-child(44)').hasText('OH 14');
    assert.dom('.usa .grid:nth-child(45)').hasText('PA 16');
    assert.dom('.usa .grid:nth-child(46)').hasText('NJ 11');
    assert.dom('.usa .grid:nth-child(47)').hasText('CT 4');
    assert.dom('.usa .grid:nth-child(48)').hasText('RI 1');

    assert.dom('.usa .grid:nth-child(50)').hasText('CA 51');
    assert.dom('.usa .grid:nth-child(51)').hasText('UT 3');
    assert.dom('.usa .grid:nth-child(52)').hasText('CO 7');
    assert.dom('.usa .grid:nth-child(53)').hasText('NE 2');
    assert.dom('.usa .grid:nth-child(54)').hasText('MO 7');
    assert.dom('.usa .grid:nth-child(55)').hasText('KY 5');
    assert.dom('.usa .grid:nth-child(56)').hasText('WV 1');
    assert.dom('.usa .grid:nth-child(57)').hasText('VA 10');
    assert.dom('.usa .grid:nth-child(58)').hasText('MD 7');
    assert.dom('.usa .grid:nth-child(59)').hasText('DE 0');

    assert.dom('.usa .grid:nth-child(63)').hasText('AZ 8');
    assert.dom('.usa .grid:nth-child(64)').hasText('NM 2');
    assert.dom('.usa .grid:nth-child(65)').hasText('KS 3');
    assert.dom('.usa .grid:nth-child(66)').hasText('AR 3');
    assert.dom('.usa .grid:nth-child(67)').hasText('TN 8');
    assert.dom('.usa .grid:nth-child(68)').hasText('NC 13');
    assert.dom('.usa .grid:nth-child(69)').hasText('SC 6');

    assert.dom('.usa .grid:nth-child(73)').hasText('AK 0');
    assert.dom('.usa .grid:nth-child(77)').hasText('OK 4');
    assert.dom('.usa .grid:nth-child(78)').hasText('LA 5');
    assert.dom('.usa .grid:nth-child(79)').hasText('MS 3');
    assert.dom('.usa .grid:nth-child(80)').hasText('AL 6');
    assert.dom('.usa .grid:nth-child(81)').hasText('GA 13');

    assert.dom('.usa .grid:nth-child(85)').hasText('HI 1');
    assert.dom('.usa .grid:nth-child(89)').hasText('TX 37');
    assert.dom('.usa .grid:nth-child(94)').hasText('FL 27');
  });

  test('clicking on grid updates map', async function (assert) {
    assert.expect(6);

    await visit('/');

    await click('.tick.rank-0');
    assert.dom('.usa .grid:nth-child(50)').hasText('CA 1');

    await click('.tick.rank-1');
    assert.dom('.usa .grid:nth-child(89)').hasText('TX 1');

    await click('.tick.rank-2');
    assert.dom('.usa .grid:nth-child(50)').hasText('CA 2');

    await click('.tick.rank-3');
    assert.dom('.usa .grid:nth-child(94)').hasText('FL 1');

    await click('.tick.rank-4');
    assert.dom('.usa .grid:nth-child(34)').hasText('NY 1');

    // skip to 385
    await click('.tick.rank-384');
    assert.dom('.usa .grid:nth-child(30)').hasText('MN 7');
  });

  test('clicking on plus/minus buttons', async function (assert) {
    assert.expect(9);

    await visit('/');

    await click('.apportioned button.plus');
    assert.dom('.usa .grid:nth-child(50)').hasText('CA 1');

    await click('.apportioned button.plus');
    assert.dom('.usa .grid:nth-child(89)').hasText('TX 1');

    await click('.apportioned button.plus');
    assert.dom('.usa .grid:nth-child(50)').hasText('CA 2');

    await click('.apportioned button.plus');
    assert.dom('.usa .grid:nth-child(94)').hasText('FL 1');

    await click('.apportioned button.plus');
    assert.dom('.usa .grid:nth-child(34)').hasText('NY 1');

    await click('.apportioned button.minus');
    assert.dom('.usa .grid:nth-child(94)').hasText('FL 1');

    await click('.apportioned button.minus');
    assert.dom('.usa .grid:nth-child(50)').hasText('CA 2');

    await click('.apportioned button.minus');
    assert.dom('.usa .grid:nth-child(89)').hasText('TX 1');

    await click('.apportioned button.minus');
    assert.dom('.usa .grid:nth-child(50)').hasText('CA 1');
  });
});
