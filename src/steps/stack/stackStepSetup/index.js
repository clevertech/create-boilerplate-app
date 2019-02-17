const run = async function(answers) {
  const setupScript = require(`../../../stacks/${answers.stack.slug}`)
  await setupScript.default(answers)
  return answers
}

export default run
