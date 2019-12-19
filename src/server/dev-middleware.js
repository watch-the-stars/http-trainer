const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../../webpack.config');
const {config, ENVS} = require('./config');

const compiler = webpack(webpackConfig);

module.exports = config.env === ENVS.DEV
  ? webpackMiddleware(compiler)
  : (req, res, next) => next();
