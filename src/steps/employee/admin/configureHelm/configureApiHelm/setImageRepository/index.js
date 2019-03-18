import yaml from '../../../../../../utils/yaml'
import { pathOr } from 'ramda'

const filePath = './helm/api.yml'

const run = async function(answers) {
  const fileContents = await yaml(filePath)
  const slug = answers.base.prompt.projectSlug

  const oldRepo = pathOr(
    null,
    ['deployment', 'image', 'repository'],
    fileContents
  )
  if (!oldRepo) return answers

  fileContents.deployment.image.repository = oldRepo.replace(
    /boilerplate/g,
    slug
  )
  await yaml(filePath, fileContents)

  return answers
}

export default run
