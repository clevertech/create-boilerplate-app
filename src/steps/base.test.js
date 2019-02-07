import * as base from './base'
import inquirer from 'inquirer'

import { clone } from '../utils/clone'
import { moveContentsToRoot } from '../utils/move'
import { deleteEmptyRootFolder } from '../utils/delete'

jest.mock('../utils/clone')
jest.mock('inquirer')

describe('Base Stack Configuration', () => {
  it('clones down boilerplate base repo', () => {
    base.run()
    expect(clone).toHaveBeenCalledWith(base.REPO)
  })
  it('mvs boilerplate base files boilerplate root', () => {
    base.run()
    expect(moveContentsToRoot).toHaveBeenCalledWith(base.NAME)
  })
  it('deletes empty boilerplate base folder', () => {
    base.run()
    expect(deleteEmptyRootFolder).toHaveBeenCalledWith(base.NAME)
  })
  it('prompts for project name and applies it to config files', () => {
    base.run()
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining({
        name: 'projectName',
        type: 'string',
        message:
          "What's the official name of the project? (e.g. The New York Times)",
        default: path.basename(dirName)
      })
    )
    expect('apply to config').toBe(false)
  })
  it('prompts for gitRemote and applies it to config files', () => {
    base.run()
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining({
        name: 'gitRemote',
        type: 'string',
        message: "What's the Git remote URI?",
        default: answers => repoURL(protocol, dashify(answers.projectName))
      })
    )
    expect('apply to config').toBe(false)
  })
  it('prompts for semi and applies it to config files', () => {
    base.run()
    expect(inquir.prompt).toHaveBeenCalledWith(
      expect.arrayContaining({
        name: 'semi',
        type: 'confirm',
        message: 'Do like semicolons in code?',
        default: true
      })
    )
    expect('apply to config').toBe(false)
  })
  it('prompts for employee and applies it to config files', () => {
    base.run()
    expect(inquir.prompt).toHaveBeenCalledWith(
      expect.arrayContaining({
        name: 'employee',
        type: 'confirm',
        message: 'Are you a Clevertech employee?',
        default: false
      })
    )
    expect('apply to config').toBe(false)
  })
  it('prompts for deployMode and applies it to config files', () => {
    base.run()
    expect(inquir.prompt).toHaveBeenCalledWith(
      expect.arrayContaining({
        name: 'deployMode',
        type: 'list',
        message: 'What is the deploy mode?',
        choices: ['k8s', 'ecs'],
        default: 'k8s'
      })
    )
    expect('apply to config').toBe(false)
  })
  it('prompts for admin and applies it to config files', () => {
    base.run()
    expect(inquir.prompt).toHaveBeenCalledWith(
      expect.arrayContaining({
        name: 'admin',
        type: 'confirm',
        message: 'Are you a Clevertech admin?',
        default: false,
        when: answers => answers.employee
      })
    )
    expect('apply to config').toBe(false)
  })
})
