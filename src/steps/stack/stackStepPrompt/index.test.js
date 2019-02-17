import getStacks from '../../../utils/getStacks'
import inquirer from 'inquirer'

import subject from './'

const fakeAnswers = {
  stack: {
    slug: 'redux-express'
  }
}

jest.mock('inquirer')
inquirer.prompt.mockImplementation(() => ({ stack: 'redux-express' }))
describe('Stack Step: Prompt', () => {
  it('prompts for stack selection', async () => {
    const stacks = await getStacks()
    const answers = await subject(fakeAnswers)
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'stack',
          type: 'list',
          choices: stacks,
          message: 'Select your stack'
        })
      ])
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
