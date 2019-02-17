import deleteRootDir from '../../../utils/delete'

const main = async function(answers) {
  await deleteRootDir('.git')
  return answers
}

export default main
