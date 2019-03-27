import json from '../../../../../utils/json'

import subject from './'

jest.mock('../../../../../utils/json', () => jest.fn(() => ({})))
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
describe('configure frontend package.json', () => {
  it('configures name', async () => {
    const answers = await subject(fakeAnswers)
    expect(json).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/frontend\/package\.json/)
    )
    expect(json).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/frontend\/package\.json/),
      expect.objectContaining({
        name: fakeAnswers.base.prompt.projectTitle + '-frontend'
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('configures description', async () => {
    const answers = await subject(fakeAnswers)
    expect(json).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/frontend\/package\.json/)
    )
    expect(json).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/frontend\/package\.json/),
      expect.objectContaining({
        description: fakeAnswers.base.prompt.projectTitle + ' Frontend'
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
