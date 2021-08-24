import { tracked } from '@glimmer/tracking';

export default class State {
  @tracked pop;

  constructor(id, name, pop, seats) {
    this.id = id;
    this.name = name;
    this.pop = pop;
    this.baseSeats = seats;
  }
}
