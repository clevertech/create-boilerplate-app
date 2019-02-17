import deleteGitDir from './deleteGitDir'
import initGitDir from './initGitDir'
import installYarnDeps from './installYarnDeps'
import initialCommit from './initialCommit'

const run = async function(answers) {
  answers = await deleteGitDir(answers)
  answers = await initGitDir(answers)
  answers = await installYarnDeps(answers)
  answers = await initialCommit(answers)
  return answers
}

export default run
