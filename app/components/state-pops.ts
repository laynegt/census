import Component from '@glimmer/component';
import State from '../utils/state';

interface Args {
  states: State[];
  update: (t1: string, t2: number) => void;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class StatePops extends Component<Args> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    StatePops: typeof StatePops;
  }
}
