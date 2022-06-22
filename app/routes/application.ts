import Route from '@ember/routing/route';
import { service } from '@ember/service';

import RouterService from '@ember/routing/router-service';

export default class ApplicationRoute extends Route {
  @service declare router: RouterService;

  redirect() {
    this.router.transitionTo('states');
  }
}
