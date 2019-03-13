import replaceStringInFile from '../../../../../utils/replaceStringInFile'

const run = async function(answers) {
  await replaceStringInFile(
    'boilerplate-dev-randomvalue',
    'helm/frontend.yml',
    answers.base.prompt.projectSlug
  )
  return answers
}

export default run
