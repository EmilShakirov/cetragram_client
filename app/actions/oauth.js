import Alt from 'alt_flux';
import { browserHistory } from 'react-router';
import { createActions } from 'alt-utils/lib/decorators';
import { paths } from 'helpers/routes';
import config from 'config';
import Storage from 'lib/storage';
import ApplicationActions from 'actions/application';
import NotificationActions from 'actions/notification';
import OauthSource from 'sources/oauth';

const STORAGE_KEY = config.storageKey;

@createActions(Alt)
export default class OauthActions {
  auth(argProvider) {
    const provider = argProvider;
    ApplicationActions.setIsLoading(true);

    return (dispatch) => {
      OauthSource
      .auth(provider)
      .then(oauthResult => {
        oauthResult.me()
        .then(authData => {
          OauthSource.createUserFromOauth(authData, provider)
          .then(user => this._authSuccess(user, dispatch))
          .catch(this._authFailure)
          .then(() => ApplicationActions.setIsLoading(false));
        });
      });
    };
  }

  _authSuccess(user, dispatch) {
    Storage.set(STORAGE_KEY, user);
    NotificationActions.add({
      message: 'Welcome to the cetragram!',
      level: 'success'
    });
    dispatch(user);
    browserHistory.push(paths.images());
  }

  _authFailure(error) {
    console.log(error);

    NotificationActions.add({
      message: 'Something gone wrong, please check your credentials',
      level: 'error'
    });
  }
}
