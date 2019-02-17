import { getDatabaseConfig, databases } from './'

describe('database utility', () => {
  it('retrieves static database config information for mysql', () => {
    const config = getDatabaseConfig('mysql')
    expect(config).toEqual(databases['mysql'])
  })
  it('retrieves static database config information for postgres', () => {
    const config = getDatabaseConfig('postgres')
    expect(config).toEqual(databases['postgres'])
  })
})
