import deepAssign from 'deep-assign';
import { request } from 'lib/request';
import Storage from 'lib/storage';
import config from 'config';

const STORAGE_KEY = config.storageKey;

export default function requestAuth(url, params, queryParams) {
  const currentUser = Storage.get(STORAGE_KEY).user || {};

  const defaultParams = {
    headers: {
      'X-User-Email': currentUser.email,
      'X-User-Token': currentUser.authentication_token
    }
  };

  return request(url, deepAssign({}, defaultParams, params), queryParams);
}
