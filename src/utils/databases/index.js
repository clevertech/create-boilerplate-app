export const databases = {
  postgres: {
    port: 5432,
    deps: {
      knex: '^0.13.0',
      pg: '^7.3.0'
    },
    cmd: 'psql -u $DB_USER -h 127.0.0.1 -p 5432 $DB_DATABASE'
  },
  mysql: {
    port: 3306,
    deps: {
      knex: '^0.13.0',
      mysql: '^2.15.0'
    },
    cmd: 'mysql -h 127.0.0.1 -u $DB_USER -p$DB_PASSWORD $DB_DATABASE'
  }
}

export const getDatabaseConfig = function(databaseName) {
  return databases[databaseName]
}
