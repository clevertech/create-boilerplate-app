import clone from '../../../utils/clone'

export const BASE_REPO = 'https://github.com/chadfurman/boilerplate'
const run = async function(answers) {
  clone(BASE_REPO)
  return answers
}

export default run
