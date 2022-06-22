import Component from '@glimmer/component';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { interpolatePurples } from 'd3-scale-chromatic';
import State from '../utils/state';

interface Args {
  maxRank: number;
  ranks: number[];
  state: State;
}

export default class EncodedState extends Component<Args> {
  // hardcode for now
  MAX_VOTES = 65;

  @action
  filterRanks(maxApportioned: number, rank: number): boolean {
    return rank < maxApportioned;
  }

  @action
  colorScale(votes: number) {
    // pad minimum value to get a darker minimum color
    const val = (votes + 6) / this.MAX_VOTES;

    return htmlSafe('background-color: ' + interpolatePurples(val));
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    EncodedState: typeof EncodedState;
  }
}
