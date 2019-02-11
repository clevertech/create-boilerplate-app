import configurePackageJson from './configurePackageJson'

const main = async function(answers) {
  await configurePackageJson(answers)
  return answers
}

export default main
