import Component from '@glimmer/component';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { interpolateRdYlBu } from 'd3-scale-chromatic';
import State from '../utils/state';

interface Args {
  filterRanks: (apportioned: number, ranks: number[]) => boolean;
  numApportioned: number;
  ranks: { [key: string]: number[] };
  states: State[];
}

export default class BarChartComponent extends Component<Args> {
  @action
  colorScale(rank: number) {
    return htmlSafe(
      'background-color: ' +
        interpolateRdYlBu(rank / (this.args.numApportioned - 1))
    );
  }
}
