# cetragram 
Poor man's instagram.

[![Build Status](https://semaphoreci.com/api/v1/emil_shakirov/cetragram_client/branches/master/badge.svg)](https://semaphoreci.com/emil_shakirov/cetragram_client)
[![Code Climate](https://codeclimate.com/github/EmilShakirov/cetragram_client/badges/gpa.svg)](https://codeclimate.com/github/EmilShakirov/cetragram_client)

## Prerequisites
### OSX

Install Node.js

Via brew:
```bash
brew install node
```

Via nvm:
```bash
brew install nvm
nvm install node
nvm alias default node
```

## Quick start

Clone repo

```bash
git clone git@github.com:EmilShakirov/cetragram_client.git
```
Run bootstrap script

```bash
bin/setup
```

## Run application

Run app (by default environment is 'development', port is 8000)

```bash
npm start
```

Run app with options

```bash
[<options>] npm start
```

```bash
NODE_ENV=development # build app with development environment
NODE_ENV=production # build app with production environment
NODE_ENV=test # build app with test environment
PORT=8000 # run server on 8000 port
```

Start to use application in browser:

```bash
localhost:8000
```

## Run tests and linters

```bash
npm test
```

## Code linting tasks

Run javascript linter
```bash
npm run eslint
```

Run stylesheets linter
```bash
npm run stylelint
```

Run all linters
```bash
npm run lint
```

## Test tasks

Run karma tests
```bash
npm run karma
```

## Credits

Based on [react-base](http://github.com/fs/react-base).

