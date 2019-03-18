import setProjectNameMakefile from './setProjectNameMakefile'
import setReadme from './setReadme'

const run = async function(answers) {
  answers = await setProjectNameMakefile(answers)
  answers = await setReadme(answers)

  return answers
}

export default run
