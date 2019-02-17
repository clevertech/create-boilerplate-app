import envFile from '../../../../utils/envFile'

const run = async function(answers) {
  await envFile('.env.example', {
    COMPOSE_PROJECT_NAME: answers.base.prompt.projectSlug
  })
  return answers
}

export default run
