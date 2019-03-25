import clone from '../../../utils/clone'
import subject from './'

const mockDirName = 'mockdirname'
const fakeAnswers = { baseDir: mockDirName }

jest.mock('../../../../config.json', () => ({
  boilerplateRepo: 'https://someboilerplate'
}))
jest.mock('../../../utils/clone')

describe('Clone down base boilerplate code', () => {
  it('pulls down the public boilerplate repo', async () => {
    const answers = await subject(fakeAnswers)
    expect(clone).toHaveBeenCalledWith(
      '--branch multi-stack https://someboilerplate',
      mockDirName
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
