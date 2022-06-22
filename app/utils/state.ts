import { tracked } from '@glimmer/tracking';

export default class State {
  @tracked id: string;
  @tracked name: string;
  @tracked pop: number;
  @tracked baseSeats: number;

  constructor(id: string, name: string, pop: number, seats: number) {
    this.id = id;
    this.name = name;
    this.pop = pop;
    this.baseSeats = seats;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    State: typeof State;
  }
}
