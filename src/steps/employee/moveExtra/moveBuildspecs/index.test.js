import exec from '../../../../utils/exec'

import subject from './'

jest.mock('../../../../utils/exec')
const fakeAnswers = {
  base: {
    prompt: {
      employee: true
    }
  }
}
describe('Move buildspec', () => {
  it('moves ecs deploy files into place', async () => {
    fakeAnswers.base.prompt.deployMode = 'ecs'
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(`mv boilerplate-extra/buildspec-ecs-* ./`)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('moves k8s deploy files into place', async () => {
    fakeAnswers.base.prompt.deployMode = 'k8s'
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(`mv boilerplate-extra/buildspec-k8s-* ./`)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('moves gcp deploy files into place', async () => {
    fakeAnswers.base.prompt.deployMode = 'gcp'
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(`mv boilerplate-extra/buildspec-gcp-* ./`)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
