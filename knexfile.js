// Added in prep for heroku deployment
const connectionString = process.env.DATABASE_URL;

module.exports = {

  development: {
    client: "pg",
    connection: process.env.DB_CONNECTION_STRING || 'postgres://postgres:docker@localhost:5432/toolbox_db',
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },

  production: {
    client: 'pg',
    connection: {
      connectionString,
      ssl : {
        rejectUnauthorized:false
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations_toolbox'
    }
  }

};
