import clone from '../../../utils/clone'

import subject from './'

jest.mock('config', () => ({
  boilerplateRepo: 'https://someboilerplate'
}))
jest.mock('../../../utils/clone')
const fakeAnswers = { asdf: 123 }
describe('Clone down base boilerplate code', () => {
  it('pulls down the public boilerplate repo', async () => {
    const answers = await subject(fakeAnswers)
    expect(clone).toHaveBeenCalledWith('https://someboilerplate', './')
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
