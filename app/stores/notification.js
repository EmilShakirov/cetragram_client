import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import NotificationActions from 'actions/notification';
import { reject } from 'lodash';

@createStore(Alt)
export default class NotificationStore {
  static displayName = 'NotificationStore'

  constructor() {
    this.notifications = [];

    this.bindListeners({
      add: NotificationActions.ADD,
      remove: NotificationActions.REMOVE
    });
  }

  add(notification) {
    notification.id = Math.floor(Date.now() / 1000);
    this.notifications.push(notification);
  }

  remove(id) {
    this.notifications = reject(this.notifications, { id });
  }
}
