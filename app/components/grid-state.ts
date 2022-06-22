import Component from '@glimmer/component';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { interpolateRdYlBu } from 'd3-scale-chromatic';

// import { SafeString } from '@ember/template';
// this is a HACK? https://github.com/typed-ember/ember-cli-typescript/issues/1155
import { SafeString } from 'handlebars';

interface Args {
  maxRank: number;
  ranks: number[];
  state: string;
}

export default class GridStateComponent extends Component<Args> {
  @action
  filterRanks(maxApportioned: number, rank: number): boolean {
    return rank < maxApportioned;
  }

  @action
  colorScale(rank: number): SafeString {
    return htmlSafe(
      'background-color: ' + interpolateRdYlBu(rank / (this.args.maxRank - 1))
    );
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    GridStateComponent: typeof GridStateComponent;
  }
}
