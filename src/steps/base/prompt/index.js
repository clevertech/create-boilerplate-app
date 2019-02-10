import path from 'path'
import inquirer from 'inquirer'

const prompt = async function(answers) {
  return await inquirer.prompt([
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
      name: 'enableBrowse',
      type: 'confirm',
      message: 'Do you want browse shortcuts?',
      default: true
    },
    {
      name: 'devApiUrl',
      type: 'confirm',
      message: 'Dev API Url?',
      default: false,
      when: answers => answers.enableBrowse
    },
    {
      name: 'devFrontendUrl',
      type: 'confirm',
      message: 'Dev Frontend Url?',
      default: false,
      when: answers => answers.enableBrowse
    },
    {
      name: 'stageApiUrl',
      type: 'confirm',
      message: 'Stage API Url?',
      default: false,
      when: answers => answers.enableBrowse
    },
    {
      name: 'stageFrontendUrl',
      type: 'confirm',
      message: 'Stage Frontend Url?',
      default: false,
      when: answers => answers.enableBrowse
    },
    {
      name: 'prodApiUrl',
      type: 'confirm',
      message: 'Production API Url?',
      default: false,
      when: answers => answers.enableBrowse
    },
    {
      name: 'prodFrontendUrl',
      type: 'confirm',
      message: 'Production Frontend Url?',
      default: false,
      when: answers => answers.enableBrowse
    },
    {
      name: 'enableRemoteRepo',
      type: 'confirm',
      message: 'Do you want to use a remote repository?',
      default: true
    },
    {
      name: 'remoteRepo',
      type: 'string',
      message: "What's the remote repo URI?",
      when: answers => answers.enableRemoteRepo,
      default: answers => `git@github.com:clevertech/${answers.projectSlug}.git`
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
      default: 'k8s'
    },
    {
      name: 'admin',
      type: 'confirm',
      message: 'Are you a Clevertech admin?',
      default: false,
      when: answers => answers.employee
    }
  ])
}

export default prompt
