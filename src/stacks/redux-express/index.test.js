import configureStack from './configureStack'
import stackPrompt from './prompt'
import cloneRepo from '../../utils/clone'
import moveContentsToRoot from '../../utils/move'
import deleteEmptyRootFolder from '../../utils/delete'
import subject, { REPO } from './'
const EMPTY_STRING = ''
describe('Redux-Express Boilerplate Setup Script', () => {
  it('clones down stack', () => {
    subject()
    expect(REPO).not.toBe(undefined)
    expect(REPO).not.toBe(EMPTY_STRING)
    expect(cloneRepo).toHaveBeenBeenCalledWith(REPO)
  })
  it('moves stack files into boilerplate root', () => {
    subject()
    expect(NAME).not.toBe(undefined)
    expect(NAME).not.toBe(EMPTY_STRING)
    expect(moveContentsToRoot).toHaveBeenBeenCalledWith(NAME)
  })
  it('deletes empty stack folder', () => {
    subject()
    expect(NAME).not.toBe(undefined)
    expect(NAME).not.toBe(EMPTY_STRING)
    expect(deleteEmptyRootFolder).toHaveBeenBeenCalledWith(NAME)
  })
  it('prompts for stack questions', () => {
    const fakeAnswers = { test: 1 }
    subject(fakeAnswers)
    expect(stackPrompt).toHaveBeenCalledWith(fakeAnswers)
  })
  it('applies answers to stack files', () => {
    const fakeAnswers = { test: 1 }
    const promptAnswers = { cats: 2 }
    stackPrompt = jest.fn(() => promptAnswers)
    const newAnswers = subject(fakeAnswers)
    console.log({ newAnswers })
    expect(configureStack).toHaveBeenCalledWith(newAnswers)
  })
})
