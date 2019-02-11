import configureStack from './configureStack'
import stackPrompt from './prompt'

const fakeAnswers = { test: 1 }

jest.mock('./prompt')
jest.mock('./configureStack')

import subject from './'
describe('Redux-Express Boilerplate Setup Script', () => {
  it('prompts for stack questions', () => {
    subject(fakeAnswers)
    expect(stackPrompt).toHaveBeenCalledWith(fakeAnswers)
  })
  it('applies answers to stack files', () => {
    const newAnswers = subject(fakeAnswers)
    console.log({ newAnswers })
    expect(configureStack).not.toHaveBeenCalledWith(fakeAnswers)
    expect(configureStack).toHaveBeenCalledWith(newAnswers)
  })
})
