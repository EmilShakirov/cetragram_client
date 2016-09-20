import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import Storage from 'lib/storage';
import sessionSource from 'sources/session';
import config from 'config';
import { browserHistory } from 'react-router';

const STORAGE_KEY = config.storageKey;
const ROOT_PATH = "/";

@createActions(Alt)
export default class SessionActions {
  create(user) {
    return (dispatch) => {
      sessionSource.create(user).then(result => {
        Storage.set(STORAGE_KEY, result);
        dispatch(result);

        browserHistory.push(ROOT_PATH);
      });
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
