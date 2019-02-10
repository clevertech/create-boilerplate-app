import inquirer from 'inquirer'

import { REPO, NAME } from '.'
import base from '.'
import clone from '../../utils/clone'
import moveContentsToRoot from '../../utils/move'
import deleteEmptyRootFolder from '../../utils/delete'
import prompt from './prompt'
import configureRoot from './configureRoot'

jest.mock('../../utils/clone')
jest.mock('../../utils/move')
jest.mock('../../utils/delete')
jest.mock('./prompt')
jest.mock('./configureRoot')
jest.mock('inquirer')

describe('Base Stack Configuration', () => {
  it('prompts for basic details', () => {
    base()
    expect(prompt).toHaveBeenCalled()
  })
  it('clones down boilerplate index repo', () => {
    base()
    expect(REPO).not.toBe(undefined)
    expect(clone).toHaveBeenCalledWith(REPO)
  })
  it('mvs boilerplate index files boilerplate root', () => {
    base()
    expect(NAME).not.toBe(undefined)
    expect(moveContentsToRoot).toHaveBeenCalledWith(NAME)
  })
  it('deletes empty boilerplate index folder', () => {
    base()
    expect(NAME).not.toBe(undefined)
    expect(deleteEmptyRootFolder).toHaveBeenCalledWith(NAME)
  })
  it('configures base root folder', () => {
    base()
    expect(configureRoot).toHaveBeenCalled()
  })
})
