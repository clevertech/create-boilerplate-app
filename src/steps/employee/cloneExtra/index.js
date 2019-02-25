import clone from '../../../utils/clone'
export const EXTRA_REPO = 'https://github.com/clevertech/boilerplate-extras'
const run = async function(answers) {
  clone(EXTRA_REPO)
  return answers
}

export default run
