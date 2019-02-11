import configureStack from './configureStack'
import stackPrompt from './prompt'
import subject from './'

jest.mock('./configureStack')
jest.mock('./prompt')

const fakeAnswers = { test: 1 }
describe('Relay-Postgraphile Boilerplate Setup Script', () => {
  it('prompts for stack questions', async () => {
    await subject(fakeAnswers)
    expect(stackPrompt).toHaveBeenCalledWith(fakeAnswers)
  })
  it('applies answers to stack files', async () => {
    const newAnswers = await subject(fakeAnswers)
    console.log({ newAnswers })
    expect(configureStack).toHaveBeenCalledWith(newAnswers)
  })
})
