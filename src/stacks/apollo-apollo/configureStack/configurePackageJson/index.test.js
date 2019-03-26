import json from '../../../../utils/json'
import subject from './'

const mockJson = { mockJson: 'mockJson' }
jest.mock('../../../../utils/json', () => jest.fn(() => mockJson))
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
describe('Stack: configure Package JSON', () => {
  it('sets mysql db-client betterScript', async () => {
    fakeAnswers.stack.prompt.dbEngine = 'mysql'
    const answers = await subject(fakeAnswers)
    expect(json).toHaveBeenCalledWith(
      expect.stringMatching(/package.json/),
      expect.objectContaining({
        betterScripts: expect.objectContaining({
          'db-client': expect.stringMatching(/mysql/)
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('sets postgres db-client betterScript', async () => {
    fakeAnswers.stack.prompt.dbEngine = 'postgres'
    const answers = await subject(fakeAnswers)
    expect(json).toHaveBeenCalledWith(
      expect.stringMatching(/package.json/),
      expect.objectContaining({
        betterScripts: expect.objectContaining({
          'db-client': expect.stringMatching(/psql/)
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
