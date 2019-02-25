import helm from '../../../../utils/helm'
const run = async function(answers) {
  if (!answers.base.prompt.admin) return answers
  // const helmFile = path.join(__dirname, 'helm/frontend.yml')
  // const helmFileSource = await fs.readFile(helmFile, 'utf8')
  // const helm = yaml.parse(helmFileSource)
  // helm.deployment.image.repository = helm.deployment.image.repository.replace(
  //   /boilerplate/g,
  //   dashify(answers.projectName)
  // )
  // helm.ingress.hosts[0].rules[0].subdomain = helm.ingress.hosts[0].rules[0].subdomain
  //   .replace(/boilerplate/g, dashify(answers.projectName))
  //   .replace(/randomvalue/g, randomValue)
  //
  // const destFile = path.join(basedir, 'helm-frontend-development.yml')
  // fs.writeFile(destFile, yaml.stringify(helm, 4, 2))
  return answers
}

export default run
