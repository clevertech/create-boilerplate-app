import inquirer from 'inquirer'
import getDefaultAnswers from '../../../utils/getDefaultAnswers'
jest.mock('inquirer')

import subject from './'

describe("Base-Stack Step's Prompt", () => {
  beforeEach(() => {
    process.argv[2] = 'purpleflowers'
  })
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
          message: expect.any(String),
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
          message: expect.any(String),
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
          message: expect.any(String),
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
          message: expect.any(String),
          name: 'enableBrowse',
          type: 'confirm',
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
          message: expect.any(String),
          default: expect.any(String),
          when: expect.any(Function)
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
          message: expect.any(String),
          default: expect.any(String),
          when: expect.any(Function)
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
          message: expect.any(String),
          default: expect.any(String),
          when: expect.any(Function)
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
          message: expect.any(String),
          default: expect.any(String),
          when: expect.any(Function)
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
          message: expect.any(String),
          default: expect.any(String),
          when: expect.any(Function)
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
          message: expect.any(String),
          default: expect.any(String),
          when: expect.any(Function)
        })
      ])
    )
  })
  it('asks to use github or not', async () => {
    await subject(getDefaultAnswers())
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
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'remoteRepo',
          type: 'string',
          message: expect.any(String),
          default: expect.any(String),
          when: expect.any(Function)
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
          message: expect.any(String),
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
          message: expect.any(String),
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
          message: expect.any(String),
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
          message: expect.any(String),
          default: false,
          when: expect.any(Function)
        })
      ])
    )
  })
  it('asks if should use sentry or not', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'enableSentry',
          type: 'confirm',
          message: expect.any(String),
          default: true
        })
      ])
    )
  })
  it('asks for sentry dev url', async () => {
    await subject(getDefaultAnswers())
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'sentryDevUrl',
          type: 'confirm',
          message: expect.any(String),
          default: false,
          when: expect.any(Function)
        })
      ])
    )
  })
  it('asks if should use sumologic or not', async () => {
    await subject(getDefaultAnswers())
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
})
