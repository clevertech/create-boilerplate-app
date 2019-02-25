import dockerRun from '../../../../utils/dockerRun'
import subject from './'

jest.mock('../../../../utils/dockerRun')
const fakeAnswers = {
  base: {
    prompt: {
      projectTitle: 'HappyCats'
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
  // it('writes name and description', async () => {
  //   const answers = await subject(fakeAnswers)
  //   expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  // })
  test.todo('writes name and description')
})
