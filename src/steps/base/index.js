import clone from '../../utils/clone'
import moveContentsToRoot from '../../utils/move'
import deleteEmptyRootFolder from '../../utils/delete'

import prompt from './prompt'

export const REPO = 'https://github.com/chadfurman/boilerplate'
export const NAME = 'base'

const base = async function() {
  // clone down boilerplate index repo
  const answers = prompt()
  clone(REPO)
  moveContentsToRoot(NAME)
  deleteEmptyRootFolder(NAME)
  // configure database
  // create root env file
  // update docker compose
  // update env file
  // update api package json
  // update frontend package json
  // update root package json
  // update prettier configuration
  // update project name
  return answers
}

export default base
