import subject from './'
import yaml from '../../../../../utils/yaml'
import { databases } from '../../../../../utils/databases'
import { mergeDeepRight } from 'ramda'

const mockYaml = {}
jest.mock('../../../../../utils/yaml', () => jest.fn(() => mockYaml))

const mockSlug = 'project_slug'
const mockDbEngine = 'mockengine'
const mockDbHost = 'mockhost'
const mockDbUser = 'mockuser'
const mockDbPass = 'mockpass'
const fakeAnswers = {
  base: {
    prompt: {
      admin: true,
      projectSlug: mockSlug
    }
  },
  stack: {
    prompt: {
      dbEngine: mockDbEngine
    }
  },
  admin: {
    prompt: {
      dbHost: mockDbHost,
      dbUser: mockDbUser,
      dbPass: mockDbPass
    }
  }
}

function expectDbConfig(answers) {
  const dbName = answers.base.prompt.projectSlug
  const dbEngine = answers.stack.prompt.dbEngine
  const dbPort = databases[dbEngine].port
  const dbHost = answers.admin.prompt.dbHost
  const dbUser = answers.admin.prompt.dbUser
  const dbPass = answers.admin.prompt.dbPass

  expect(yaml).toHaveBeenCalledWith(
    expect.stringMatching(/\.\/helm\/api\.yml/),
    expect.objectContaining({
      secrets: expect.arrayContaining([
        expect.objectContaining({
          data: expect.objectContaining({
            DB_ENGINE: dbEngine,
            DB_PORT: dbPort,
            DB_DATABASE: dbName + '_development',
            DB_POOL_MIN: 2,
            DB_POOL_MAX: 10,
            DB_HOST: dbHost,
            DB_USER: dbUser,
            DB_PASSWORD: dbPass
          })
        })
      ])
    })
  )
}

describe('Admin ConfigureApiHelm: setDbInfo', () => {
  afterEach(jest.clearAllMocks)
  it('configures postgres secrets', async () => {
    const mockAnswers = mergeDeepRight(fakeAnswers, {
      stack: { prompt: { dbEngine: 'postgres' } }
    })
    const answers = await subject(mockAnswers)
    expectDbConfig(mockAnswers)
    expect(answers).toEqual(expect.objectContaining(mockAnswers))
  })

  it('configures mysql secrets', async () => {
    const mockAnswers = mergeDeepRight(fakeAnswers, {
      stack: { prompt: { dbEngine: 'postgres' } }
    })
    const answers = await subject(mockAnswers)
    expectDbConfig(mockAnswers)
    expect(answers).toEqual(expect.objectContaining(mockAnswers))
  })
})
