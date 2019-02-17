import stackStepPrompt from './stackStepPrompt'
import stackStepMove from './stackStepMove'
import stackStepDelete from './stackStepDelete'
import stackStepSetup from './stackStepSetup'

import subject from './'

jest.mock('./stackStepPrompt', () => jest.fn(answers => answers))
jest.mock('./stackStepMove', () => jest.fn(answers => answers))
jest.mock('./stackStepDelete', () => jest.fn(answers => answers))
jest.mock('./stackStepSetup', () => jest.fn(answers => answers))

const fakeAnswers = { asdf: '123' }
describe('Stack Setup Script', () => {
  it('prompts for stack choice', async () => {
    const answers = await subject(fakeAnswers)
    expect(stackStepPrompt).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('move selected stack files into project root', async () => {
    const answers = await subject(fakeAnswers)
    expect(stackStepMove).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('delete stack directory from project root', async () => {
    const answers = await subject(fakeAnswers)
    expect(stackStepDelete).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('run chosen stack setup script', async () => {
    const answers = await subject(fakeAnswers)
    expect(stackStepSetup).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
