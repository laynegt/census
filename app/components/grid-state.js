import Component from '@glimmer/component';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import d3Scale from 'd3-scale-chromatic';

export default class GridStateComponent extends Component {
  @action
  filterRanks(maxApportioned, rank) {
    return rank < maxApportioned;
  }

  @action
  colorScale(rank) {
    return htmlSafe(
      'background-color: ' +
        d3Scale.interpolateRdYlBu(rank / (this.args.maxRank - 1))
    );
  }
}
