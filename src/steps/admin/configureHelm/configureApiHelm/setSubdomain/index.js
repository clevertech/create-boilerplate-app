import yaml from '../../../../../utils/yaml'
import generateRandom from '../../../../../utils/generateRandom'

const filePath = __dirname + './helm/api.yml'

const run = async function(answers) {
  const fileContents = await yaml(filePath)
  const slug = answers.base.prompt.projectSlug
  const oldSubdomain = fileContents.ingress.hosts[0].rules[0].subdomain

  fileContents.ingress.hosts[0].rules[0].subdomain = oldSubdomain
    .replace(/boilerplate/g, slug)
    .replace(/randomvalue/g, generateRandom(8))

  await yaml(filePath, fileContents)

  return answers
}

export default run
