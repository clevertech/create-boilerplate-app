import inquirer from 'inquirer'

import subject from './'

const fakeAnswers = {
  stack: {
    slug: 'redux-express'
  }
}

const mockStacks = ['s1', 's2', 's3']
jest.mock('../../../utils/getStacks', () => jest.fn(() => mockStacks))
jest.mock('inquirer')
inquirer.prompt.mockImplementation(() => ({ stack: 'redux-express' }))
describe('Stack Step: Prompt', () => {
  it('prompts for stack selection', async () => {
    const answers = await subject(fakeAnswers)
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'stack',
          type: 'list',
          choices: mockStacks,
          message: 'Select your stack'
        })
      ])
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
