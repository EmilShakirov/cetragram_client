import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
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
      signupSource.create(user).then((result) => {
        const { user: responseUser } = result;

        SessionActions.create(user);

        dispatch(responseUser);
      });
    };
  }
}
