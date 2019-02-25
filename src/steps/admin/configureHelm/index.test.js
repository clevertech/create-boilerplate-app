// import moveHelm from './moveHelm'
import configureFrontendHelm from './configureFrontendHelm'
import configureApiHelm from './configureApiHelm'
import subject from '.'
jest.mock('./configureFrontendHelm', () => jest.fn(answers => answers))
jest.mock('./configureApiHelm', () => jest.fn(answers => answers))
const fakeAnswers = {
  base: {
    prompt: {
      admin: true
    }
  }
}
describe('admin configure helm files', () => {
  afterEach(jest.clearAllMocks)
  it('does nothing if not admin', async () => {
    fakeAnswers.base.prompt.admin = false
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(configureFrontendHelm).not.toHaveBeenCalled()
    expect(configureApiHelm).not.toHaveBeenCalled()
    fakeAnswers.base.prompt.admin = true
  })

  it('configures Frontend helm', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(configureFrontendHelm).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
  it('configures API helm', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(configureApiHelm).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
})
