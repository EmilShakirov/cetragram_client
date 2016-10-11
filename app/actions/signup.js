import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import ApplicationActions from 'actions/application';
import SessionActions from 'actions/session';
import signupSource from 'sources/signup';

@createActions(Alt)
export default class SignupActions {
  setValue(name, value) {
    return { name, value };
  }

  create(userObject) {
    const user = userObject;

    return (dispatch) => {
      ApplicationActions.setIsLoading(true);
      signupSource.create(user).then((result) => {
        const { user: responseUser } = result;

        ApplicationActions.setIsLoading(false);
        SessionActions.create(user);
        ApplicationActions.closeModal();
        dispatch(responseUser);
      });
    };
  }
}
