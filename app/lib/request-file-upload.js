import 'es6-promise';
import 'whatwg-fetch';
import config from 'config';
import deepAssign from 'deep-assign';
import Storage from 'lib/storage';
import { filteredParams } from './request';

const STORAGE_KEY = config.storageKey;

export default function requestFileUpload(url, params, queryParams) {
  const currentUser = Storage.get(STORAGE_KEY).user || {};

  const defaultParams = {
    headers: {
      'X-User-Email': currentUser.email,
      'X-User-Token': currentUser.authentication_token
    }
  };

  if (queryParams) {
    url += `?${filteredParams(queryParams)}`;
  }

  return fetch(url, deepAssign({}, defaultParams, params));
}
