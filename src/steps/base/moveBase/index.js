import move from '../../../utils/move'
const run = async function(answers) {
  await move('boilerplate')
  return answers
}

export default run
