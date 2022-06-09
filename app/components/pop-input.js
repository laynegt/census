import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PopInputComponent extends Component {
  @tracked showActions;
  @tracked isEditing;
  @tracked newPop;

  constructor() {
    super(...arguments);

    this.newPop = this.args.state.pop;
  }

  @action
  updatePop(stateId, pop) {
    if (pop !== this.args.state.pop) {
      this.args.update(stateId, parseInt(pop, 10));
    }
  }
}
