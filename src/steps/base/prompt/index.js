import inquirer from 'inquirer'
const prompt = async function() {
  const answers = await inquirer.prompt([
    {
      name: 'projectName',
      type: 'string',
      message:
        "What's the official name of the project? (e.g. The New York Times)",
      default: path.basename(dirName)
    },
    {
      name: 'gitRemote',
      type: 'string',
      message: "What's the Git remote URI?",
      default: answers => repoURL(protocol, dashify(answers.projectName))
    },
    {
      name: 'semi',
      type: 'confirm',
      message: 'Do like semicolons in code?',
      default: true
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

  return answers
}

export default prompt
