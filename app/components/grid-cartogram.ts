import Component from '@glimmer/component';

export default class GridCartogramComponent extends Component {
  // 12 x 8
  grid = [
    [null, null, null, null, null, null, null, null, null, null, null, 'ME'],
    [null, null, null, null, null, 'WI', null, null, null, null, 'VT', 'NH'],
    [null, 'WA', 'ID', 'MT', 'ND', 'MN', 'IL', 'MI', null, 'NY', 'MA', null],
    [null, 'OR', 'NV', 'WY', 'SD', 'IA', 'IN', 'OH', 'PA', 'NJ', 'CT', 'RI'],
    [null, 'CA', 'UT', 'CO', 'NE', 'MO', 'KY', 'WV', 'VA', 'MD', 'DE', null],
    [null, null, 'AZ', 'NM', 'KS', 'AR', 'TN', 'NC', 'SC', null, null, null],
    ['AK', null, null, null, 'OK', 'LA', 'MS', 'AL', 'GA', null, null, null],
    ['HI', null, null, null, 'TX', null, null, null, null, 'FL', null, null],
  ];
}
