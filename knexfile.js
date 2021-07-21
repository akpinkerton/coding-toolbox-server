// Added in prep for heroku deployment
const connectionString = process.env.DATABASE_URL;

module.exports = {

  development: {
    client: "pg",
    connection: 'postgres://postgres:docker@localhost:5438/toolbox_database',
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
