import React, {PropTypes} from 'react';
import NotificationSystem from 'react-notification-system';
import connectToStores from 'alt-utils/lib/connectToStores';
import { isEmpty } from 'lodash';
import NotificationActions from 'actions/notification';
import NotificationStore from 'stores/notification';

@connectToStores
export default class Notifications extends React.Component {
  static propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      level: PropTypes.string,
      message: PropTypes.string
    }))
  }

  static getStores(props) {
    return [NotificationStore];
  }

  static getPropsFromStores(props) {
    return {
      ...NotificationStore.getState()
    };
  }

  showNotifications = () => {
    const { notifications } = this.props;

    if (isEmpty(notifications)) return;
    notifications.map(this.handleNotification);
  }

  handleNotification = (notification) => {
    const { message, level, id } = notification;

    this.refs.notificationSystem.addNotification(notification);

    setTimeout(() => { NotificationActions.remove(id); }, 3000);
  }

  render() {
    return (
      <div>
        { this.showNotifications() }

        <NotificationSystem ref="notificationSystem"/>
      </div>
    );
  }
}
