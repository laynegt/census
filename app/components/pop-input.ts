import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import State from '../utils/state';

interface Args {
  i: number;
  state: State;
  update: (id: string, pop: number) => void; // outgoing pop is a number
}

export default class PopInput extends Component<Args> {
  @tracked showActions = false;
  @tracked isEditing = false;
  @tracked newPop;
  @tracked value = 0;

  constructor(owner: unknown, args: Args) {
    super(owner, args);

    // stringify for form input
    this.newPop = this.args.state.pop ? this.args.state.pop.toString() : '';
  }

  @action
  updatePop(stateId: string, pop: string): void {
    if (parseInt(pop, 10) !== this.args.state.pop) {
      this.args.update(stateId, parseInt(pop, 10));
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'PopInput': typeof PopInput;
  }
}
