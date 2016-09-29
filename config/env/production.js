module.exports = {
  target: 'https://cetragram.herokuapp.com',
  apiPath: 'https://cetragram-api.herokuapp.com',
  rootPath: '/',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  }
};
