import deleteGitDir from './deleteGitDir'
import initGitDir from './initGitDir'
import installYarnDeps from './installYarnDeps'
import initialCommit from './initialCommit'

const run = async function(answers) {
  await deleteGitDir(answers)
  await initGitDir(answers)
  await installYarnDeps(answers)
  await initialCommit(answers)
}

export default run
