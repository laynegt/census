import Component from '@glimmer/component';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import d3Scale from 'd3-scale-chromatic';

export default class EncodedStateComponent extends Component {
  // hardcode for now
  MAX_VOTES = 65;

  @action
  filterRanks(maxApportioned, rank) {
    return rank < maxApportioned;
  }

  @action 
  colorScale(votes) {
    // pad minimum value to get a darker minimum color
    let val = (votes + 6) / this.MAX_VOTES;

    return htmlSafe('background-color: ' + d3Scale.interpolatePurples(val));
  }
}
