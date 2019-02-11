import exec from '../exec'
const run = async function(dir) {
  if (!dir || dir === '') return
  await exec(`mv ./${dir}/.* ./`)
}
export default run
