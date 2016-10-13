import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import { browserHistory } from 'react-router';
import ApplicationActions from 'actions/application';
import config from 'config';
import sessionSource from 'sources/session';
import Storage from 'lib/storage';

const STORAGE_KEY = config.storageKey;
const ROOT_PATH = "/";

@createActions(Alt)
export default class SessionActions {
  create(user) {
    return (dispatch) => {
      ApplicationActions.setIsLoading(true);

      sessionSource.create(user).then(result => {
        Storage.set(STORAGE_KEY, result);
        ApplicationActions.closeModal();
        dispatch(result);
        browserHistory.push(ROOT_PATH);
      }).catch(error => {
        console.log(error);
      }).then(() => {
        ApplicationActions.setIsLoading(false);
      });;
    };
  }

  delete(user) {
    return (dispatch) => {
      sessionSource.delete(user);
      Storage.remove(STORAGE_KEY);
      dispatch(user);
      browserHistory.push(ROOT_PATH);
    };
  }
}
