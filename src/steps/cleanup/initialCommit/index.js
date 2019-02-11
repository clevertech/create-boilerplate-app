import exec from '../../../utils/exec'
const main = async function() {
  await exec('git add . && git commit -m "initial commit"')
}

export default main
