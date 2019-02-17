export const databases = {
  postgres: {
    port: 5432,
    deps: {
      knex: '^0.13.0',
      pg: '^7.3.0'
    }
  },
  mysql: {
    port: 3306,
    deps: {
      knex: '^0.13.0',
      mysql: '^2.15.0'
    }
  }
}

export const getDatabaseConfig = function(databaseName) {
  return databases[databaseName]
}
