import configureStack from './configureStack'
import promptStack from './promptStack'

import subject from './'

const fakeAnswers = { test: 1 }

jest.mock('./promptStack', () =>
  jest.fn(answers => Object.assign(answers, { stack: { prompt: {} } }))
)
jest.mock('./configureStack', () => jest.fn(answers => answers))

describe('Redux-Express Boilerplate Setup Script', async () => {
  it('prompts for stack questions', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(promptStack).toHaveBeenCalledWith(fakeAnswers)
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
    expect(newAnswers).toEqual(
      expect.objectContaining({ stack: { prompt: expect.any(Object) } })
    )
  })
  it('applies answers to stack files', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(configureStack).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
