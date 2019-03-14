import replaceStringInFile from '../../../../../utils/replaceStringInFile'

const run = async function(answers) {
  await replaceStringInFile(
    __dirname + '/../../../../../helm/frontend.yml',
    'boilerplate-dev-randomvalue',
    answers.base.prompt.projectSlug
  )
  return answers
}

export default run
