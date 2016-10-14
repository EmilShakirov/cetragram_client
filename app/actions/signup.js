import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import ApplicationActions from 'actions/application';
import NotificationActions from 'actions/notification';
import SessionActions from 'actions/session';
import SignupSource from 'sources/signup';

@createActions(Alt)
export default class SignupActions {
  setValue(name, value) {
    return { name, value };
  }

  create(userObject) {
    const user = userObject;

    return (dispatch) => {
      ApplicationActions.setIsLoading(true);
      SignupSource.create(user).then((result) => {
        const { user: responseUser } = result;

        SessionActions.create(user);
        ApplicationActions.closeModal();
        dispatch(responseUser);
      }).catch(error => {
        console.log(error);
        NotificationActions.add({
          message: 'This email has been already taken.',
          level: 'error'
        });
      }).then(() => {
        ApplicationActions.setIsLoading(false);
      });;
    };
  }
}
