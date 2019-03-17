import inquirer from 'inquirer'
import getDefaultAnswers from '../../../utils/getDefaultAnswers'

jest.mock('inquirer')
inquirer.prompt.mockImplementation(() => ({}))

import subject from './'

let fakeAnswers = {}
describe("Base-Stack Step's Prompt", () => {
  beforeEach(() => {
    process.argv[2] = 'purpleflowers'
    fakeAnswers = getDefaultAnswers()
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('asks for project name in title format with a default', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'projectTitle',
          type: 'string',
          message: expect.any(String),
          default: expect.any(String)
        })
      ])
    )
  })
  it('asks for project name in slug format with a default', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'projectSlug',
          type: 'string',
          message: expect.any(String),
          default: expect.any(String)
        })
      ])
    )
  })
  it('asks for project description', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'projectDescription',
          message: expect.any(String),
          type: 'string',
          default: expect.any(String)
        })
      ])
    )
  })
  it('asks to use github or not', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'enableRemoteRepo',
          type: 'confirm',
          message: expect.any(String),
          default: true
        })
      ])
    )
  })
  it('asks for remote git url (aka origin)', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'remoteRepoUrl',
          type: 'string',
          message: expect.any(String),
          default: expect.any(Function),
          when: expect.any(Function)
        })
      ])
    )
  })
  it('asks if the user wants to use semicolons or not', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'semi',
          type: 'confirm',
          message: expect.any(String),
          default: false
        })
      ])
    )
  })
  it('asks if the user is an employee to toggle employee specific functionality', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'employee',
          type: 'confirm',
          message: expect.any(String),
          default: false
        })
      ])
    )
  })
  it('asks about deployment environment choices only when employee', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'deployMode',
          type: 'list',
          message: expect.any(String),
          choices: ['k8s', 'ecs'],
          default: 'k8s'
        })
      ])
    )
  })
  it('asks if it should generate admin files or not', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'admin',
          type: 'confirm',
          message: expect.any(String),
          default: false,
          when: expect.any(Function)
        })
      ])
    )
  })
  it('saves answers', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(
      expect.objectContaining({
        base: expect.objectContaining({ prompt: expect.any(Object) })
      })
    )
  })
})
