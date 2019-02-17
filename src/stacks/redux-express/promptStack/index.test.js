import inquirer from 'inquirer'

import subject, { DB_NAMES, DB_DEFAULT } from './'

jest.mock('inquirer')
inquirer.prompt.mockImplementation(() => ({}))

const fakeAnswers = { cat: 2 }
describe('Redux-Express stack promptAdmin', async () => {
  it('returns new answers', async () => {
    const newAnswers = await subject(fakeAnswers)
    expect(newAnswers).toEqual(expect.objectContaining(fakeAnswers))
    expect(newAnswers).toEqual(
      expect.objectContaining({ stack: { prompt: expect.any(Object) } })
    )
  })
  it('exports database name choices', () => {
    expect(DB_NAMES).not.toEqual(undefined)
  })
  it('exports default database choice', () => {
    expect(DB_DEFAULT).not.toEqual(undefined)
  })
  it('asks for database', async () => {
    await subject(fakeAnswers)
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'dbEngine',
          type: 'list',
          choices: DB_NAMES,
          default: DB_DEFAULT,
          message: expect.any(String)
        })
      ])
    )
  })
})
