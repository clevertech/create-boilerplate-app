import envFile from '../../../../utils/envFile'

import subject from './'

jest.mock('../../../../utils/envFile')
const mockBaseDir = 'mockbasedir'
const fakeAnswers = {
  baseDir: mockBaseDir,
  base: {
    prompt: {
      projectTitle: 'HappyCats',
      projectSlug: 'happy-cats'
    }
  }
}
describe('Configuration of base env file', () => {
  it('sets COMPOSE_PROJECT_NAME', async () => {
    const answers = await subject(fakeAnswers)
    expect(envFile).toHaveBeenNthCalledWith(
      1,
      mockBaseDir + '.env.example',
      expect.objectContaining({
        COMPOSE_PROJECT_NAME: expect.stringMatching(
          `${fakeAnswers.base.prompt.projectSlug}`
        )
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
