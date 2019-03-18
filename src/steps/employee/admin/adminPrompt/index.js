import inquirer from 'inquirer'
import { pathOr } from 'ramda'

const run = async function(answers) {
  if (!pathOr(false, ['base', 'prompt', 'admin'], answers)) return answers
  const results = await inquirer.prompt([
    {
      name: 'dbHost',
      type: 'string',
      message: "What's the remote DB host?"
    },
    {
      name: 'dbUser',
      type: 'string',
      message: "What's the remote DB user?"
    },
    {
      name: 'dbPass',
      type: 'string',
      message: "What's the remote DB password?"
    },
    {
      name: 'redisHost',
      type: 'string',
      message: "What's the remote redis host?"
    }
  ])
  answers.base.admin = { prompt: results }
  return answers
}

export default run
