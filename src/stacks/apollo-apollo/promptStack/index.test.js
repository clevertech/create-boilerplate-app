import inquirer from 'inquirer'

import subject, { DB_ENGINES, DB_DEFAULT } from './'

jest.mock('inquirer')
inquirer.prompt.mockImplementation(() => ({}))

const fakeAnswers = {
  base: {
    prompt: {
      projectTitle: 'HappyCats'
    }
  },
  stack: {}
}
describe('Redux-Express stack promptAdmin', async () => {
  it('returns new answers', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
    expect(newAnswers).toEqual(
      expect.objectContaining({
        base: fakeAnswers.base,
        stack: { prompt: expect.any(Object) }
      })
    )
  })
  it('exports database name choices', () => {
    expect(DB_ENGINES).not.toEqual(undefined)
  })
  it('exports default database choice', () => {
    expect(DB_DEFAULT).not.toEqual(undefined)
  })
  it('asks for database engine', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
    expect(newAnswers).toEqual(
      expect.objectContaining({
        base: fakeAnswers.base,
        stack: { prompt: expect.any(Object) }
      })
    )
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'dbEngine',
          type: 'list',
          choices: DB_ENGINES,
          default: DB_DEFAULT,
          message: expect.any(String)
        })
      ])
    )
  })
  it('asks for database name', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
    expect(newAnswers).toEqual(
      expect.objectContaining({
        base: fakeAnswers.base,
        stack: { prompt: expect.any(Object) }
      })
    )
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'dbName',
          type: 'string',
          default: fakeAnswers.base.prompt.projectSlug,
          message: expect.any(String)
        })
      ])
    )
  })
  it('asks for database port', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
    expect(newAnswers).toEqual(
      expect.objectContaining({
        base: fakeAnswers.base,
        stack: { prompt: expect.any(Object) }
      })
    )
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'dbPort',
          type: 'number',
          default: expect.any(Function),
          message: expect.any(String)
        })
      ])
    )
  })
  it('asks for database user', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
    expect(newAnswers).toEqual(
      expect.objectContaining({
        base: fakeAnswers.base,
        stack: { prompt: expect.any(Object) }
      })
    )
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'dbUser',
          type: 'string',
          default: fakeAnswers.base.prompt.projectSlug,
          message: expect.any(String)
        })
      ])
    )
  })
  it('asks for database password', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
    expect(newAnswers).toEqual(
      expect.objectContaining({
        base: fakeAnswers.base,
        stack: { prompt: expect.any(Object) }
      })
    )
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'dbPass',
          type: 'string',
          default: expect.any(String),
          message: expect.any(String)
        })
      ])
    )
  })
  it('asks for health check secret', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
    expect(newAnswers).toEqual(
      expect.objectContaining({
        base: fakeAnswers.base,
        stack: { prompt: expect.any(Object) }
      })
    )
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'healthCheckSecret',
          type: 'string',
          default: expect.any(String),
          message: expect.any(String)
        })
      ])
    )
  })
  it('asks for session secret', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
    expect(newAnswers).toEqual(
      expect.objectContaining({
        base: fakeAnswers.base,
        stack: { prompt: expect.any(Object) }
      })
    )
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'sessionSecret',
          type: 'string',
          default: expect.any(String),
          message: expect.any(String)
        })
      ])
    )
  })
})
