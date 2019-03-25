import json from '../../../../utils/json'

const run = async function(answers) {
  const path = answers.dirName + '/package.json'
  const pjson = await json(path)
  pjson.name = answers.base.prompt.projectTitle
  pjson.description = answers.base.prompt.projectTitle
  await json(path, pjson)
  return answers
}

export default run
