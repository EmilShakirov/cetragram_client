import ApplicationActions from 'actions/application';
import session from 'services/session';

export const paths = {
  home() { return '/'; },
  images() { return '/images'; },
  image(id) { return `/images/${id}`; }
};

export function openImageModal (nextState, _replace) {
  const { params } = nextState;

  ApplicationActions.openModal({ name: 'image', params });
};

export function requireAuth(nextState, replace) {
  if (!session.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};
