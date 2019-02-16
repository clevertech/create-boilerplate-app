import inquirer from 'inquirer'

import { REPO, NAME } from '.'
import promptBase from './promptBase'
import cloneBase from './cloneBase'
import moveBase from './moveBase'
import deleteBase from './deleteBase'
import configureBase from './configureBase'

import subject from '.'

jest.mock('./promptBase', () =>
  jest.fn(answers => {
    answers.base = answers.base || {}
    answers.base.prompt = {}
    return answers
  })
)
jest.mock('./cloneBase', () => jest.fn(answers => answers))
jest.mock('./moveBase', () => jest.fn(answers => answers))
jest.mock('./deleteBase', () => jest.fn(answers => answers))
jest.mock('./configureBase', () => jest.fn(answers => answers))

const fakeAnswers = { asdf: 123 }
describe('Base Stack Configuration', async () => {
  it('prompts for basic details', async () => {
    const answers = await subject(fakeAnswers)
    expect(promptBase).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(answers).toEqual(
      expect.objectContaining({
        base: expect.objectContaining({ prompt: expect.any(Object) })
      })
    )
  })
  it('clones down boilerplate index repo', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers.base.BASE_REPO).not.toBe(undefined)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(cloneBase).toHaveBeenCalledWith(expect.objectContaining(fakeAnswers))
  })
  it('mvs boilerplate index files boilerplate root', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(moveBase).toHaveBeenCalledWith(expect.objectContaining(fakeAnswers))
  })
  it('deletes empty boilerplate index folder', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(deleteBase).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
  it('configures base root folder', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(configureBase).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
})
