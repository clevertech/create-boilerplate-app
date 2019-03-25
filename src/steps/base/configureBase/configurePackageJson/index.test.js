import json from '../../../../utils/json'
import subject from './'

const mockBaseDir = 'mockbasedir'
const mockJson = { mockJson: 'mockJson' }
jest.mock('../../../../utils/json', () => jest.fn(() => mockJson))
const fakeAnswers = {
  baseDir: mockBaseDir,
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
describe('Update Root Package JSON', () => {
  it('sets name and description', async () => {
    const answers = await subject(fakeAnswers)
    expect(json).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/package.json/)
    )
    expect(json).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/package.json/),
      expect.objectContaining({
        name: fakeAnswers.base.prompt.projectTitle,
        description: fakeAnswers.base.prompt.projectTitle
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
