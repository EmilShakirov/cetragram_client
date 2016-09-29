module.exports = {
  target: 'https://cetragram.herokuapp.com',
  apiPath: 'https://cetragram-api.herokuapp.com/v1',
  rootPath: '/',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  }
};
