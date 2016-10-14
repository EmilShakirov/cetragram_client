import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import { browserHistory } from 'react-router';
import { paths } from 'helpers/routes';
import config from 'config';
import sessionSource from 'sources/session';
import Storage from 'lib/storage';
import ApplicationActions from 'actions/application';
import NotificationActions from 'actions/notification';

const STORAGE_KEY = config.storageKey;

@createActions(Alt)
export default class SessionActions {
  create(user) {
    return (dispatch) => {
      ApplicationActions.setIsLoading(true);

      sessionSource.create(user).then(result => {
        Storage.set(STORAGE_KEY, result);
        ApplicationActions.closeModal();
        dispatch(result);
        browserHistory.push(paths.home());
        NotificationActions.add({
          message: 'Welcome to the cetragram!',
          level: 'success'
        });
      }).catch(error => {
        console.log(error);
        NotificationActions.add({
          message: 'Invalid email/password',
          level: 'error'
        });
      }).then(() => {
        ApplicationActions.setIsLoading(false);
      });
    };
  }

  delete(user) {
    return (dispatch) => {
      sessionSource.delete(user);
      Storage.remove(STORAGE_KEY);
      dispatch(user);
      browserHistory.push(paths.home());
    };
  }
}
