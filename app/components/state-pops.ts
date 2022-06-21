import Component from '@glimmer/component';

interface StatePopsArgs {
  states: string[];
  update: Function;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class StatePops extends Component<StatePopsArgs> {}
