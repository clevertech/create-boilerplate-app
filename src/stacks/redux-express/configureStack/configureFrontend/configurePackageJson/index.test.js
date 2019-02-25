import packageJson from '../../../../../utils/packageJson'

import subject from './'

jest.mock('../../../../../utils/packageJson', () => jest.fn(() => ({})))
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
    expect(packageJson).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/frontend\/package\.json/)
    )
    expect(packageJson).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/frontend\/package\.json/),
      expect.objectContaining({
        name: fakeAnswers.base.prompt.projectTitle + ' Frontend'
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('configures description', async () => {
    const answers = await subject(fakeAnswers)
    expect(packageJson).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/frontend\/package\.json/)
    )
    expect(packageJson).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/frontend\/package\.json/),
      expect.objectContaining({
        description: fakeAnswers.base.prompt.projectTitle + ' Frontend'
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
