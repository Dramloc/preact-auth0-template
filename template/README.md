# {{ name }}

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Configure auth0

- Make sure `http://localhost:8080/callback` is an allowed callback URL for your auth0 client.
- Edit `preact.config.js` and update `process.env.AUTH0_DOMAIN` and `process.env.AUTH0_CLIENT_ID` with your auth0 information.
