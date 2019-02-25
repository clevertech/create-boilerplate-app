export const databases = {
  postgres: {
    port: 5432,
    deps: {
      knex: '^0.13.0',
      pg: '^7.3.0'
    },
    environment: {
      POSTGRES_PASSWORD: 'o5MU9UhWaHNUXfrMqU~Ho',
      POSTGRES_USER: 'postgres',
      POSTGRES_DB: 'boilerplate'
    },
    dockerComposeImage: 'postgres',
    cmd:
      'PGPASSWORD=$POSTGRES_PASSWORD psql -h localhost -u $POSTGRES_USER $POSTGRES_DB'
  },
  mysql: {
    port: 3306,
    deps: {
      knex: '^0.13.0',
      mysql: '^2.15.0'
    },
    environment: {
      MYSQL_PASSWORD: 'o5MU9UhWaHNUXfrMqU~Ho',
      MYSQL_USER: 'postgres',
      MYSQL_DATABASE: 'boilerplate'
    },
    dockerComposeImage: 'mysql/mysql-server',
    cmd: 'mysql -h 127.0.0.1 -u $MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DATABASE'
  }
}

export const getDatabaseConfig = databaseName => databases[databaseName]
