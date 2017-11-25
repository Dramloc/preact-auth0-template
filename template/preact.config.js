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
		// Fixes `formidable` issue with ssr (https://github.com/felixge/node-formidable/issues/337#issuecomment-153408479)
		new webpack.DefinePlugin({ 'global.GENTLY': false })
	];
}
