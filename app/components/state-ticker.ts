import Component from '@glimmer/component';

type RankDict = { [key: string]: [number] };

interface StateTickerArgs {
  ranks: RankDict;
}

export default class StateTickerComponent extends Component<StateTickerArgs> {
  MAX_RANK = 385;

  get flattenedRankedStates() {
    let flattened: { [key: number]: string } = []; // k: rank, v: state id

    Object.entries(this.args.ranks).forEach(([stateId, ranks]) => {
      ranks.forEach((rank) => {
        // yup, ranks are zero-indexed
        flattened[rank] = stateId;
      });
    });

    return flattened;
  }
}
