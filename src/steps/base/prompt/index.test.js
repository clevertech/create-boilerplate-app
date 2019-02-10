import inquirer from 'inquirer'
import getDefaultAnswers from '../../../utils/getDefaultAnswers'
jest.mock('inquirer')

import subject from './'

describe("Base-Stack Step's Prompt", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('asks for project name in title format with a default', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'projectTitle',
          type: 'string',
          default: expect.any(String)
        })
      ])
    )
  })
  it('asks for project name in slug format with a default', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'projectSlug',
          type: 'string',
          default: expect.any(String)
        })
      ])
    )
  })
  it('asks for project description', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'projectDescription',
          type: 'string',
          default: expect.any(String)
        })
      ])
    )
  })
  it('asks to use browse or not', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'enableBrowse',
          type: 'string',
          default: true
        })
      ])
    )
  })
  it('asks for dev api url with a default', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'devApiUrl',
          type: 'string',
          default: expect.any(String),
          when: answers => answers.enableBrowse
        })
      ])
    )
  })
  it('asks for dev frontend url with a default', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'devFrontendUrl',
          type: 'string',
          default: expect.any(String),
          when: answers => answers.enableBrowse
        })
      ])
    )
  })
  it('asks for stage api url with a default', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'stageApiUrl',
          type: 'string',
          default: expect.any(String),
          when: answers => answers.enableBrowse
        })
      ])
    )
  })
  it('asks for stage frontend url with a default', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'stageFrontendUrl',
          type: 'string',
          default: expect.any(String),
          when: answers => answers.enableBrowse
        })
      ])
    )
  })
  it('asks for prod api url with a default', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'prodApiUrl',
          type: 'string',
          default: expect.any(String),
          when: answers => answers.enableBrowse
        })
      ])
    )
  })
  it('asks for prod frontend url with a default', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'prodFrontendUrl',
          type: 'string',
          default: expect.any(String),
          when: answers => answers.enableBrowse
        })
      ])
    )
  })
  it('asks to use github or not', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'enableGithub',
          type: 'string',
          default: true
        })
      ])
    )
  })
  it('asks for remote git url (aka origin)', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'gitRemote',
          type: 'string',
          default: expect.any(String),
          when: answers => answers.enableGithub
        })
      ])
    )
  })
  it('asks if the user wants to use semicolons or not', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'semi',
          type: 'confirm',
          default: false
        })
      ])
    )
  })
  it('asks if the user is an employee to toggle employee specific functionality', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'employee',
          type: 'confirm',
          default: false
        })
      ])
    )
  })
  it('asks about deployment environment choices only when employee', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'deployMode',
          type: 'list',
          choices: ['k8s', 'ecs'],
          default: 'k8s'
        })
      ])
    )
  })
  it('asks if it should generate admin files or not', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'admin',
          type: 'confirm',
          default: false,
          when: expect.any(Function)
        })
      ])
    )
  })
  it('asks if should use sentry or not', async () => {
    expect(false).toBe(true)
  })
  it('asks for sentry url', async () => {
    expect(false).toBe(true)
  })
  it('asks if should use sumologic or not', async () => {
    expect(false).toBe(true)
  })
})
