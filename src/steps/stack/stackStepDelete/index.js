import deleteFolder from '../../../utils/delete'

const run = async function(answers) {
  await deleteFolder('stacks')
  return answers
}

export default run
