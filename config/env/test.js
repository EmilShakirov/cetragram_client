module.exports = {
  target: 'http://localhost:8000',
  apiPath: 'http://localhost:8000/v1',
  rootPath: '/',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  },
  test: {
    port: 9999
  }
};
