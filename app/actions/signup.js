import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import ApplicationActions from 'actions/application';
import NotificationActions from 'actions/notification';
import SessionActions from 'actions/session';
import SignupSource from 'sources/signup';

const CREATE_FAILURE_MESSAGE = {
  message: 'This email has been already taken.',
  level: 'error'
};

@createActions(Alt)
export default class SignupActions {
  setValue(name, value) {
    return { name, value };
  }

  create(userObject) {
    const user = userObject;
    ApplicationActions.setIsLoading(true);

    return (dispatch) => {
      SignupSource.create(user)
      .then((user) => this._createSuccess(user, dispatch))
      .catch(this._createFailure)
      .then(() => ApplicationActions.setIsLoading(false));
    };
  }

  _createSuccess(user, dispatch) {
    SessionActions.create(user);
    ApplicationActions.closeModal();
    dispatch(user);
  }

  _createFailure(error) {
    console.log(error);
    NotificationActions.add(CREATE_FAILURE_MESSAGE);
  }
}
