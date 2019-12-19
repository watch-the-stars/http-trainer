const ENVS = {
  DEV: 'development',
  TEST: 'testing',
  PROD: 'production',
};

const env = Object.values(ENVS).indexOf(process.env.ENV) === -1
  ? ENVS.PROD
  : process.env.ENV;

const config = {
  env,
  port: env === ENVS.DEV ? 8080 : 80,
};

module.exports = {
  config,
  ENVS,
};
