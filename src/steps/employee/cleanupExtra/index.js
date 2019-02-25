import deleteUtil from '../../../utils/delete'
const run = async function(answers) {
  deleteUtil('boilerplate-extras')
  return answers
}

export default run
