const config = require('./config');
const common = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  useNullAsDefault: true,
  seeds: {
    directory: './seeds/' + config.env
  }
};

module.exports = {
  development: {
    ...common
  },
  test: {
    ...common
  },
  production: {
    ...common
  }
};
