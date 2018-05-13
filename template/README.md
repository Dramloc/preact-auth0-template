# {{ name }}

## Configure auth0

- Make sure `http://localhost:8080/callback` is an allowed callback URL for your auth0 client.
- Edit `preact.config.js` and update `process.env.AUTH0_DOMAIN` and `process.env.AUTH0_CLIENT_ID` with your auth0 information.

## Commands

- `yarn start`: Runs `serve` or `dev`, depending on `NODE_ENV` value. Defaults to `dev server`

- `yarn dev`: Run a development, HMR server

- `yarn serve`: Run a production-like server

- `yarn build`: Production-ready build

- `yarn lint`: Pass JavaScript files using ESLint

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
