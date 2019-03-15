import replaceStringInFile from '../../../../../utils/replaceStringInFile'

const run = async function(answers) {
  await replaceStringInFile(
    __dirname + '/../../../../../helm/api.yml',
    'boilerplateRepo',
    answers.base.prompt.projectSlug
  )
  return answers
}

export default run
