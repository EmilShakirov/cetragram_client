import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';

@createActions(Alt)
export default class NotificationActions {
  constructor() {
    this.generateActions('add', 'remove');
  }
}
