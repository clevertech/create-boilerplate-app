import config from 'config'
export const databases = config.databases

export const getDatabaseConfig = databaseName => databases[databaseName]
