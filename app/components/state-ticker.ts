import Component from '@glimmer/component';

type RankDict = { [key: string]: [number] };

// type ClickRankFunction = (rank: number) => void;

interface Args {
  clickRank: (rank: number) => void;
  numApportioned: number;
  ranks: RankDict;
  selectState: (id: string | null) => void;
  selectedState: string;
}

export default class StateTickerComponent extends Component<Args> {
  MAX_RANK = 385;

  get flattenedRankedStates(): string[] {
    const flattened: string[] = []; // array of state ids, index is the rank

    Object.entries(this.args.ranks).forEach(([stateId, ranks]) => {
      ranks.forEach((rank) => {
        // yup, ranks are zero-indexed
        flattened[rank] = stateId;
      });
    });

    return flattened;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'StateTickerComponent': typeof StateTickerComponent;
  }
}
