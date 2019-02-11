import deleteRootDir from '../../../utils/delete'

const main = async function(answers) {
  await deleteRootDir('base')
  await deleteRootDir('stacks')
  return answers
}

export default main
