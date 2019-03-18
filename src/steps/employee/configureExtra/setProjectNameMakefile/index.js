import replaceStringInFile from '../../../../utils/replaceStringInFile'

const run = async function(answers) {
  await replaceStringInFile(
    'boilerplate',
    'src/api/Makefile',
    answers.base.prompt.projectSlug
  )
  await replaceStringInFile(
    'boilerplate',
    'src/frontend/Makefile',
    answers.base.prompt.projectSlug
  )

  return answers
}

export default run
