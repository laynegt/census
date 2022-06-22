import Route from '@ember/routing/route';
import State from '../utils/state';

export default class StatesRoute extends Route {
  model() {
    const states = [
      {
        id: 'AL',
        name: 'Alabama',
        pop: 5030053,
        baseSeats: 6,
      },
      {
        id: 'AK',
        name: 'Alaska',
        pop: 736081,
        baseSeats: 0,
      },
      {
        id: 'AZ',
        name: 'Arizona',
        pop: 7158923,
        baseSeats: 8,
      },
      {
        id: 'AR',
        name: 'Arkansas',
        pop: 3013756,
        baseSeats: 3,
      },
      {
        id: 'CA',
        name: 'California',
        pop: 39576757,
        baseSeats: 51,
      },
      {
        id: 'CO',
        name: 'Colorado',
        pop: 5782171,
        baseSeats: 7,
      },
      {
        id: 'CT',
        name: 'Connecticut',
        pop: 3608298,
        baseSeats: 4,
      },
      {
        id: 'DE',
        name: 'Delaware',
        pop: 990837,
        baseSeats: 0,
      },
      {
        id: 'FL',
        name: 'Florida',
        pop: 21570527,
        baseSeats: 27,
      },
      {
        id: 'GA',
        name: 'Georgia',
        pop: 10725274,
        baseSeats: 13,
      },
      {
        id: 'HI',
        name: 'Hawaii',
        pop: 1460137,
        baseSeats: 1,
      },
      {
        id: 'ID',
        name: 'Idaho',
        pop: 1841377,
        baseSeats: 1,
      },
      {
        id: 'IL',
        name: 'Illinois',
        pop: 12822739,
        baseSeats: 16,
      },
      {
        id: 'IN',
        name: 'Indiana',
        pop: 6790280,
        baseSeats: 8,
      },
      {
        id: 'IA',
        name: 'Iowa',
        pop: 3192406,
        baseSeats: 3,
      },
      {
        id: 'KS',
        name: 'Kansas',
        pop: 2940865,
        baseSeats: 3,
      },
      {
        id: 'KY',
        name: 'Kentucky',
        pop: 4509342,
        baseSeats: 5,
      },
      {
        id: 'LA',
        name: 'Louisiana',
        pop: 4661468,
        baseSeats: 5,
      },
      {
        id: 'ME',
        name: 'Maine',
        pop: 1363582,
        baseSeats: 1,
      },
      {
        id: 'MD',
        name: 'Maryland',
        pop: 6185278,
        baseSeats: 7,
      },
      {
        id: 'MA',
        name: 'Massachusetts',
        pop: 7033469,
        baseSeats: 8,
      },
      {
        id: 'MI',
        name: 'Michigan',
        pop: 10084442,
        baseSeats: 12,
      },
      {
        id: 'MN',
        name: 'Minnesota',
        pop: 5709752,
        baseSeats: 7,
      },
      {
        id: 'MS',
        name: 'Mississippi',
        pop: 2963914,
        baseSeats: 3,
      },
      {
        id: 'MO',
        name: 'Missouri',
        pop: 6160281,
        baseSeats: 7,
      },
      {
        id: 'MT',
        name: 'Montana',
        pop: 1085407,
        baseSeats: 1,
      },
      {
        id: 'NE',
        name: 'Nebraska',
        pop: 1963333,
        baseSeats: 2,
      },
      {
        id: 'NV',
        name: 'Nevada',
        pop: 3108462,
        baseSeats: 3,
      },
      {
        id: 'NH',
        name: 'New Hampshire',
        pop: 1379089,
        baseSeats: 1,
      },
      {
        id: 'NJ',
        name: 'New Jersey',
        pop: 9294493,
        baseSeats: 11,
      },
      {
        id: 'NM',
        name: 'New Mexico',
        pop: 2120220,
        baseSeats: 2,
      },
      {
        id: 'NY',
        name: 'New York',
        pop: 20215751,
        baseSeats: 25,
      },
      {
        id: 'NC',
        name: 'North Carolina',
        pop: 10453948,
        baseSeats: 13,
      },
      {
        id: 'ND',
        name: 'North Dakota',
        pop: 779702,
        baseSeats: 0,
      },
      {
        id: 'OH',
        name: 'Ohio',
        pop: 11808848,
        baseSeats: 14,
      },
      {
        id: 'OK',
        name: 'Oklahoma',
        pop: 3963516,
        baseSeats: 4,
      },
      {
        id: 'OR',
        name: 'Oregon',
        pop: 4241500,
        baseSeats: 5,
      },
      {
        id: 'PA',
        name: 'Pennsylvania',
        pop: 13011844,
        baseSeats: 16,
      },
      {
        id: 'RI',
        name: 'Rhode Island',
        pop: 1098163,
        baseSeats: 1,
      },
      {
        id: 'SC',
        name: 'South Carolina',
        pop: 5124712,
        baseSeats: 6,
      },
      {
        id: 'SD',
        name: 'South Dakota',
        pop: 887770,
        baseSeats: 0,
      },
      {
        id: 'TN',
        name: 'Tennessee',
        pop: 6916897,
        baseSeats: 8,
      },
      {
        id: 'TX',
        name: 'Texas',
        pop: 29183290,
        baseSeats: 37,
      },
      {
        id: 'UT',
        name: 'Utah',
        pop: 3275252,
        baseSeats: 3,
      },
      {
        id: 'VT',
        name: 'Vermont',
        pop: 643503,
        baseSeats: 0,
      },
      {
        id: 'VA',
        name: 'Virginia',
        pop: 8654542,
        baseSeats: 10,
      },
      {
        id: 'WA',
        name: 'Washington',
        pop: 7715946,
        baseSeats: 9,
      },
      {
        id: 'WV',
        name: 'West Virginia',
        pop: 1795045,
        baseSeats: 1,
      },
      {
        id: 'WI',
        name: 'Wisconsin',
        pop: 5897473,
        baseSeats: 7,
      },
      {
        id: 'WY',
        name: 'Wyoming',
        pop: 577719,
        baseSeats: 0,
      },
    ];

    return states.map((state) => {
      return new State(state.id, state.name, state.pop, state.baseSeats);
    });
  }
}
