# preact-auth0-template

A simple `preact-cli` template for [auth0](https://auth0.com/). Live demo is available [here](https://preact-auth0.surge.sh/).

## Usage

``` bash
$ yarn global add preact-cli
$ preact create dramloc/preact-auth0-template my-project --yarn
$ cd my-project
$ yarn start
```

Development server runs on port `8080`. If the default port is already in use on your machine it will start the development server on a random port.

## Configure auth0

- Make sure `http://localhost:8080/callback` is an allowed callback URL for your auth0 client.
- Edit `src/lib/auth/index.js`, replace `{{ auth0 domain }}` and `{{ auth0 client id }}` with your auth0 information.

## Commands

- `yarn start`: Runs `serve` or `dev`, depending on `NODE_ENV` value. Defaults to `dev server`

- `yarn dev`: Run a development, HMR server

- `yarn serve`: Run a production-like server

- `yarn build`: Production-ready build

- `yarn lint`: Pass JavaScript files using ESLint
