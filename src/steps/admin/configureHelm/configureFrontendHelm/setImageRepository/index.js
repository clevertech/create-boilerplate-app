import yaml from '../../../../../utils/yaml'
import { pathOr } from 'ramda'

const filePath = __dirname + '/../../../../../helm/frontend.yml'

const run = async function(answers) {
  const fileContents = await yaml(filePath)
  let imageRepo = pathOr(
    null,
    ['deployment', 'image', 'repository'],
    fileContents
  )

  if (!imageRepo) {
    console.warn(
      'admin/configureHelm/configureFrontendHelm skipped: imageRepo missing.'
    )
    return answers
  }

  fileContents.deployment.image.repository = imageRepo.replace(
    /boilerplate/g,
    answers.base.prompt.projectSlug
  )

  await yaml(filePath, fileContents)
  return answers
}

export default run
