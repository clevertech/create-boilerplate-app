import { getDatabaseConfig } from '../databases'
import fs from 'fs-extra'

import subject from './'

const mockEnvFile =
  'DB_ENGINE=postgres\nDB_HOST=db\nDB_USER=postgres\nDB_PORT=5432\nDB_PASSWORD=o5MU9UhWaHNUXfrMqU~Ho\nDB_DATABASE=boilerplate\nDB_POOL_MIN=2\nDB_POOL_MAX=10@@\nSESSION_SECRET=O7LlCRtK9DjwoTmNRRbWnx@\nHEALTH_CHECK_SECRET=a73R3SDSUvLEffTp_N6eq\nTWILIO_ACCOUNT_SID=\nTWILIO_AUTH_TOKEN=\nTWILIO_NUMBER_FROM= # phone number or alphanumeric sender id\n'
jest.mock('fs-extra')
jest.mock('.env.example', () => mockEnvFile, { virtual: true })

describe('package.json utility', () => {
  afterEach(jest.clearAllMocks)

  it('does nothing with no params', async () => {
    const result = await subject()
    expect(result).toBe(undefined)
  })

  it("retrieve's .env file with one param", async () => {
    fs.readFile.mockImplementation((file, format) =>
      file === '.env.example' ? mockEnvFile : undefined
    )
    const result = await subject('.env.example')
    expect(result.DB_ENGINE).toEqual('postgres')
    expect(result.DB_DATABASE).toEqual('boilerplate')
  })

  it('can update .env file with 2nd param', async () => {
    const result = await subject('.env.example', {
      DB_DATABASE: 'purple_local',
      DB_ENGINE: 'postgres',
      DB_PORT: getDatabaseConfig('postgres').port,
      SESSION_SECRET: 'fdsa',
      HEALTH_CHECK_SECRET: 'asdf'
    })
    expect(fs.writeFile).toHaveBeenCalledWith(
      '.env.example',
      expect.stringMatching(/DB_DATABASE=purple_local/)
    )
    expect(fs.writeFile).toHaveBeenCalledWith(
      '.env.example',
      expect.stringMatching(/DB_ENGINE=postgres/)
    )
    expect(fs.writeFile).toHaveBeenCalledWith(
      '.env.example',
      expect.stringMatching(/DB_PORT=/)
    )
    expect(fs.writeFile).toHaveBeenCalledWith(
      '.env.example',
      expect.stringMatching(/HEALTH_CHECK_SECRET=asdf/)
    )
    expect(fs.writeFile).toHaveBeenCalledWith(
      '.env.example',
      expect.stringMatching(/SESSION_SECRET=fdsa/)
    )
  })
})
