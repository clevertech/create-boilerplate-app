import subject from './'
import replaceStringInFile from '../../../../utils/replaceStringInFile'

jest.mock('../../../../utils/replaceStringInFile')
const fakeSlug = 'happy-cats-two'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }
describe('Generate Frontend Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('configures admin helm script', async () => {
    const answers = await subject(fakeAnswers)
    expect(replaceStringInFile).toHaveBeenCalledWith(
      'boilerplate',
      'helm/frontend.yml',
      fakeSlug
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  test.todo('generates frontend helm')
  // const generateHelmFrontend = async (answers, randomValue) => {
  //   const helmFile = path.join(__dirname, 'helm/frontend.yml')
  //   const helmFileSource = await fs.readFile(helmFile, 'utf8')
  //   const helm = yaml.parse(helmFileSource)
  //   helm.deployment.image.repository = helm.deployment.image.repository.replace(
  //     /boilerplate/g,
  //     dashify(answers.projectName)
  //   )
  //   helm.ingress.hosts[0].rules[0].subdomain = helm.ingress.hosts[0].rules[0].subdomain
  //     .replace(/boilerplate/g, dashify(answers.projectName))
  //     .replace(/randomvalue/g, randomValue)
  //
  //   const destFile = path.join(basedir, 'helm-frontend-development.yml')
  //   fs.writeFile(destFile, yaml.stringify(helm, 4, 2))
  // }
})
