import Component from '@glimmer/component';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import d3Scale from 'd3-scale-chromatic';

export default class BarChartComponent extends Component {
  @action
  colorScale(rank) {
    return htmlSafe(
      'background-color: ' +
        d3Scale.interpolateRdYlBu(rank / (this.args.numApportioned - 1))
    );
  }
}
