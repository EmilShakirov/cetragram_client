import deepAssign from 'deep-assign';
import { request } from 'lib/request';
import session from 'services/session';

export function requestAuth(url, params, queryParams) {
  const defaultParams = {
    headers: {
      'X-User-Email': session.email,
      'X-User-Token': session.token
    }
  };

  return request(url, deepAssign({}, defaultParams, params), queryParams);
}
