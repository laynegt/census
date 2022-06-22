import Component from '@glimmer/component';

type SelectStateFunction = (id: string | null) => void;

interface Args {
  numApportioned: number;
  ranks: { [key: string]: number[] };
  selectState: SelectStateFunction;
  selectedState: string;
  states: string[];
}

export default class GridCartogramComponent extends Component<Args> {
  // 12 x 8
  grid = [
    ['', '', '', '', '', '', '', '', '', '', '', 'ME'],
    ['', '', '', '', '', 'WI', '', '', '', '', 'VT', 'NH'],
    ['', 'WA', 'ID', 'MT', 'ND', 'MN', 'IL', 'MI', '', 'NY', 'MA', ''],
    ['', 'OR', 'NV', 'WY', 'SD', 'IA', 'IN', 'OH', 'PA', 'NJ', 'CT', 'RI'],
    ['', 'CA', 'UT', 'CO', 'NE', 'MO', 'KY', 'WV', 'VA', 'MD', 'DE', ''],
    ['', '', 'AZ', 'NM', 'KS', 'AR', 'TN', 'NC', 'SC', '', '', ''],
    ['AK', '', '', '', 'OK', 'LA', 'MS', 'AL', 'GA', '', '', ''],
    ['HI', '', '', '', 'TX', '', '', '', '', 'FL', '', ''],
  ];
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    GridCartogramComponent: typeof GridCartogramComponent;
  }
}
