import webpack from 'webpack';

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
	config.plugins = [
		...config.plugins,
		new webpack.DefinePlugin({
			// Fixes `formidable` issue with ssr (https://github.com/felixge/node-formidable/issues/337#issuecomment-153408479)
			'global.GENTLY': false,
			// Your auth0 tenant domain
			'process.env.AUTH0_DOMAIN': JSON.stringify('preact-auth0.eu.auth0.com'),
			// Your auth0 client id
			'process.env.AUTH0_CLIENT_ID': JSON.stringify('A7xxu6KsEZx2fezoWJCL043f2SapV0Fw'),
			// The callback URL for your application
			'process.env.REDIRECT_URI': JSON.stringify('http://localhost:8080/callback')
		})
	];
}
