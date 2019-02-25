import path from 'path'
import inquirer from 'inquirer'

const prompt = async function(answers) {
  const newAnswers = await inquirer.prompt([
    {
      name: 'projectTitle',
      type: 'string',
      message:
        "What's the official name of the project? (e.g. The New York Times)",
      default: answers.dirName
    },
    {
      name: 'projectSlug',
      type: 'string',
      message:
        "What's the official slugified name of the project? (e.g. the-new-york-times)",
      default: path.basename(answers.dirName)
    },
    {
      name: 'projectDescription',
      type: 'string',
      message: "What's the project's description?",
      default: answers.dirName
    },
    {
      name: 'enableRemoteRepo',
      type: 'confirm',
      message: 'Do you want to use a remote repository?',
      default: true
    },
    {
      name: 'remoteRepoUrl',
      type: 'string',
      message: "What's the remote repo URI?",
      default: answers =>
        `git@github.com:clevertech/${answers.projectSlug}.git`,
      when: answers => answers.enableRemoteRepo
    },
    {
      name: 'semi',
      type: 'confirm',
      message: 'Do like semicolons in code?',
      default: false
    },
    {
      name: 'employee',
      type: 'confirm',
      message: 'Are you a Clevertech employee?',
      default: false
    },
    {
      name: 'deployMode',
      type: 'list',
      message: 'What is the deploy mode?',
      choices: ['k8s', 'ecs'],
      default: 'k8s',
      when: answers => answers.employee
    },
    {
      name: 'admin',
      type: 'confirm',
      message: 'Are you a Clevertech admin?',
      default: false,
      when: answers => answers.employee
    }
  ])

  answers.base = Object.assign(answers.base || {}, { prompt: newAnswers })
  return answers
}

export default prompt
