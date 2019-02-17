import generateHelm from './generateHelm'

import subject from './'

jest.mock('./generateHelm', () => jest.fn(answers => answers))

const fakeAnswers = { admin: true }
const fakeAnswersNotAdmin = {}
describe('Configuration cleanup', async () => {
  it('does nothing if not admin', async () => {
    let answers = await subject(fakeAnswersNotAdmin)
    expect(answers).toEqual(expect.objectContaining(fakeAnswersNotAdmin))
  })
  it('generates helm files', async () => {
    let answers = await subject(fakeAnswers)
    expect(generateHelm).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
