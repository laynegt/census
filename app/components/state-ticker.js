import Component from '@glimmer/component';

export default class StateTickerComponent extends Component {
  MAX_RANK = 800;

  get flattenedRankedStates() {
    let flattened = [];

    Object.entries(this.args.ranks).forEach(([stateId, ranks]) => {
      ranks.forEach(rank => {
        // yup, ranks are zero-indexed
        flattened[rank] = stateId;
      });
    });

    return flattened;
  }
}
