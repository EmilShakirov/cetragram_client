import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import { browserHistory } from 'react-router';
import { paths } from 'helpers/routes';
import config from 'config';
import Storage from 'lib/storage';
import OauthSource from 'sources/oauth';
import SessionActions from 'actions/session';
import ApplicationActions from 'actions/application';

const STORAGE_KEY = config.storageKey;

@createActions(Alt)
export default class OauthActions {
  auth(argProvider) {
    const provider = argProvider;

    ApplicationActions.setIsLoading(true);
    return (dispatch) => {

      OauthSource.auth(provider).then(result => {
        result.me().then(data => {
          OauthSource.createUserFromOauth(data, provider)
          .then(result => {
            Storage.set(STORAGE_KEY, result);
            ApplicationActions.setIsLoading(false);
            dispatch(result);
            browserHistory.push(paths.images());
          });
        });
      });
    };
  }
}
