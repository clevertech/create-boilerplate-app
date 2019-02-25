import inquirer from 'inquirer'
import nanoid from 'nanoid'
import { databases } from '../../../utils/databases'

export const DB_ENGINES = Object.keys(databases)
export const DB_DEFAULT = 'postgres'

const main = async function(answers) {
  const newAnswers = await inquirer.prompt([
    {
      name: 'dbEngine',
      type: 'list',
      choices: DB_ENGINES,
      default: DB_DEFAULT,
      message: 'Select your preferred database engine'
    },
    {
      name: 'dbName',
      type: 'string',
      default: answers.base.prompt.projectSlug,
      message: 'Enter the name of the database'
    },
    {
      name: 'dbPort',
      type: 'number',
      default: answers => (answers.dbEngine === 'mysql' ? 3306 : 5432),
      message: 'Enter the database port'
    },
    {
      name: 'dbUser',
      type: 'string',
      default: answers.base.prompt.projectSlug,
      message: "Enter the database user's name"
    },
    {
      name: 'dbPass',
      type: 'string',
      default: nanoid(),
      message: "Enter the database user's password"
    },
    {
      name: 'healthCheckSecret',
      type: 'string',
      default: nanoid(),
      message: 'Enter the health check secret'
    },
    {
      name: 'sessionSecret',
      type: 'string',
      default: nanoid(),
      message: 'Enter the session secret'
    }
  ])
  answers.stack = Object.assign(answers.stack || {}, { prompt: newAnswers })
  return answers
}

export default main
