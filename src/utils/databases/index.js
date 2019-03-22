import config from '../../../config.json'
export const databases = config.databases

export const getDatabaseConfig = databaseName => databases[databaseName]
