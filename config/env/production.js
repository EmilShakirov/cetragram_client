module.exports = {
  target: 'http://cetragram.herokuapp.com',
  apiPath: 'http://cetragram-api.herokuapp.com',
  rootPath: '/',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  }
};
