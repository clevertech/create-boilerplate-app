import replaceStringInFile from '../../../../utils/replaceStringInFile'

const run = async function(answers) {
  await replaceStringInFile(
    'boilerplate',
    'docker/run',
    answers.base.prompt.projectSlug
  )
  return answers
}

export default run
