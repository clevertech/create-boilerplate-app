import replaceStringInFile from '../../../../utils/replaceStringInFile'
import subject from './'

jest.mock('../../../../utils/replaceStringInFile')
const fakeAnswers = {
  base: {
    prompt: {
      projectTitle: 'HappyCats',
      projectSlug: 'happy-cats'
    }
  },
  stack: {
    prompt: {
      dbEngine: '...'
    },
    apiDependenciess: []
  }
}
describe('configure base docker/run', async () => {
  afterEach(jest.clearAllMocks)
  it('calls the docker/run utility', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(replaceStringInFile).toHaveBeenCalledWith(
      'boilerplate',
      'docker/run',
      expect.any(String)
    )
  })
})
