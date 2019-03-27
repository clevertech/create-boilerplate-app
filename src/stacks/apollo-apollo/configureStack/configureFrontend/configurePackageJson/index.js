import packageJson from '../../../../../utils/json'

const main = async function(answers) {
  const path = answers.baseDir + '/frontend/package.json'
  const pjson = await packageJson(path)
  pjson.name = answers.base.prompt.projectTitle + '-frontend'
  pjson.description = answers.base.prompt.projectTitle + ' Frontend'
  await packageJson(path, pjson)
  return answers
}

export default main
