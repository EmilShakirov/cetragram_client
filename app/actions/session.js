import Alt from 'alt_flux';
import { browserHistory } from 'react-router';
import { createActions } from 'alt-utils/lib/decorators';
import { paths } from 'helpers/routes';
import config from 'config';
import sessionSource from 'sources/session';
import Storage from 'lib/storage';
import ApplicationActions from 'actions/application';
import NotificationActions from 'actions/notification';

const STORAGE_KEY = config.storageKey;
const CREATE_SUCCESS_NOTIFICATION = {
  message: 'Welcome to the cetragram!',
  level: 'success'
};
const CREATE_FAILURE_NOTIFICATION = {
  message: 'Invalid email/password',
  level: 'error'
};

@createActions(Alt)
export default class SessionActions {
  create(user) {
    return (dispatch) => {
      ApplicationActions.setIsLoading(true);

      sessionSource.create(user)
      .then(result => this._createSuccess(user, dispatch))
      .catch(this._createFailure)
      .then(() => ApplicationActions.setIsLoading(false));
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

  _createSuccess(user, dispatch) {
    Storage.set(STORAGE_KEY, result);
    ApplicationActions.closeModal();
    dispatch(result);
    browserHistory.push(paths.home());
    NotificationActions.add(CREATE_SUCCESS_NOTIFICATION);
  }

  _createFailure(error) {
    console.log(error);
    NotificationActions.add(CREATE_FAILURE_NOTIFICATION);
  }
}
