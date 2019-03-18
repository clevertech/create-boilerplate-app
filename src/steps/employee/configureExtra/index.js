import setProjectNameMakefile from './setProjectNameMakefile/index'

const run = async function(answers) {
  answers = await setProjectNameMakefile(answers)
  return answers
}

export default run
