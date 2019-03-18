import yaml from '../../../../../utils/yaml'

const filePath = './helm/api.yml'

const run = async function(answers) {
  const fileContents = await yaml(filePath)
  const slug = answers.base.prompt.projectSlug

  fileContents.deployment.image.repository = fileContents.deployment.image.repository.replace(
    /boilerplate/g,
    slug
  )

  await yaml(filePath, fileContents)

  return answers
}

export default run
