import inquirer from 'inquirer'
import getStacks from '../../../utils/getStacks'

const main = async function(answers) {
  const newanswers = await inquirer.prompt([
    {
      name: 'stack',
      type: 'list',
      choices: await getStacks(),
      message: 'Select your stack'
    }
  ])
  answers.stack = Object.assign(answers.stack || {}, { slug: newanswers.stack })
  return answers
}

export default main
