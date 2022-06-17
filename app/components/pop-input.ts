import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { State } from '../types/state';

type UpdateFunction = (id: number, pop: number) => void;

interface PopInputSignature {
  Args: {
    state: State;
    update: UpdateFunction;
  };
}

export default class PopInputComponent extends Component<PopInputSignature> {
  @tracked showActions = false;
  @tracked isEditing = false;
  @tracked newPop = 0;

  // constructor() {
  //   super(...arguments);

  //   this.newPop = this.args.state.pop;
  // }

  @action
  updatePop(stateId: number, pop: string): void {
    if (parseInt(pop, 10) !== this.args.state.pop) {
      this.args.update(stateId, parseInt(pop, 10));
    }
  }
}
