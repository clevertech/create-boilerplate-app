import exec from '../exec'
const run = async (remoteRepo, destination) => {
  await exec(`git clone ${remoteRepo} ${destination} --depth 1`)
}
export default run
