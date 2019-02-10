import clone from '../../utils/clone'
import moveContentsToRoot from '../../utils/move'
import deleteEmptyRootFolder from '../../utils/delete'

import prompt from './prompt'
import configureRoot from './configureRoot'

export const REPO = 'https://github.com/chadfurman/boilerplate'
export const NAME = 'base'

const base = async function(answers) {
  // clone down boilerplate index repo
  const newAnswers = await prompt(answers)
  clone(REPO)
  moveContentsToRoot(NAME)
  deleteEmptyRootFolder(NAME)
  configureRoot(newAnswers)
  return newAnswers
}

export default base
