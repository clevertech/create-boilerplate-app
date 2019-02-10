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
      message:
        'Do you want to enable browse shortcuts for dev, stage, prod, github, and sumologic?',
      default: true
    },
    {
      name: 'devApiUrl',
      type: 'string',
      message: 'Dev API Url? (can be changed in package.json later)',
      default: '',
      when: answers => answers.enableBrowse
    },
    {
      name: 'devFrontendUrl',
      type: 'string (can be changed in package.json later)',
      default: '',
      message: 'Dev Frontend Url?',
      when: answers => answers.enableBrowse
    },
    {
      name: 'stageApiUrl',
      type: 'string',
      message: 'Stage API Url? (can be changed in package.json later)',
      default: '',
      when: answers => answers.enableBrowse
    },
    {
      name: 'stageFrontendUrl',
      type: 'string',
      message: 'Stage Frontend Url? (can be changed in package.json later)',
      default: '',
      when: answers => answers.enableBrowse
    },
    {
      name: 'prodApiUrl',
      type: 'string',
      message: 'Production API Url? (can be changed in package.json later)',
      default: '',
      when: answers => answers.enableBrowse
    },
    {
      name: 'prodFrontendUrl',
      type: 'string',
      message:
        'Production Frontend Url? (can be changed in package.json later)',
      default: '',
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
