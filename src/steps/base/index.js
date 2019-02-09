import clone from '../../utils/clone'
import moveContentsToRoot from '../../utils/move'
import deleteEmptyRootFolder from '../../utils/delete'

import prompt from './prompt'
import configureApi from './configureApi'
import configureFrontend from './configureFrontend'
import configureRoot from './configureRoot'

export const REPO = 'https://github.com/chadfurman/boilerplate'
export const NAME = 'base'

const base = async function() {
  // clone down boilerplate index repo
  const answers = prompt()
  clone(REPO)
  moveContentsToRoot(NAME)
  deleteEmptyRootFolder(NAME)
  configureApi()
  configureFrontend()
  configureRoot()
  return answers
}

export default base
