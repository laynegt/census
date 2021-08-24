import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class StatesController extends Controller {
  NUM_COEFF = 100;
  
  @tracked maxApportioned = 0;
  @tracked padding = 0;
  @tracked selectedState;

  @action
  filterRanks(maxApportioned, rank) {
    return rank < maxApportioned;
  }

  @action
  updateApportioned(e) {
    e.target.checkValidity();
    this.maxApportioned = parseInt(e.target.value, 10) - this.padding;
  }

  @action
  incApportioned(inc) {
    this.maxApportioned = parseInt(this.maxApportioned, 10) + parseInt(inc, 10);
  }

  @action
  selectState(state) {
    if (this.selectedState === state) {
      this.selectedState = null;  
    } else { 
      this.selectedState = state;
    }
  }

  @action
  setApportioned(apportioned) {
    this.maxApportioned = apportioned;
  }

  @action
  updatePop(stateId, newPop) {
    this.model.findBy('id', stateId).pop = newPop;
  }

  get numApportioned() {
    return parseInt(this.maxApportioned, 10);
  }

  get sortedStates() {
    return this.model.sort((a,b) => {
      return b.pop - a.pop;
    });
  }

  get coefficients() {
    let coefficients = {};

    this.model.forEach(state => {
      let stateCoeffs = [];

      for (let i=2; i<this.NUM_COEFF+2; i++) {
        stateCoeffs.push(this.geoMean(i) * state.pop);
      }

      coefficients[state.id] = stateCoeffs;
    });

    console.log('coefficients');
    return coefficients;
  }

  get ranks() {
    // need a single array of all coefficients
    let allCoeffs = [];

    for (let id in this.coefficients) {
      // push all items into `allCoeffs`
      allCoeffs.push.apply(allCoeffs, this.coefficients[id]);
    }

    // sort desending
    allCoeffs.sort((a,b) => b-a);

    // go back thru coefficients and recreate an array with ranks
    let ranksByState = {};
    for (let id in this.coefficients) {
      let stateRanks = [];
      let stateCoeffs = this.coefficients[id];
      
      stateCoeffs.forEach(stateCoeff => {
        // find its rank
        let rank = allCoeffs.indexOf(stateCoeff);
        stateRanks.push(rank);
      });

      ranksByState[id] = stateRanks;
    }

    console.log('ranks');
    return ranksByState;
  }

  geoMean(n) {
    if (n === 1) {
      throw new Error('no geo mean of 1');
    }

    return 1/Math.sqrt(n*(n-1));
  }
}
