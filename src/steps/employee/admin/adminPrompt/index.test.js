import inquirer from 'inquirer'
import subject from './index'

jest.mock('inquirer')
inquirer.prompt.mockImplementation(() => ({}))

const fakeAnswers = {
  base: {
    prompt: {
      admin: true
    }
  }
}
describe("Admin-Stack Step's Prompt", () => {
  afterEach(jest.clearAllMocks)

  it('asks for remote db host', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(answers.base.admin.prompt).not.toEqual(undefined)
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'dbHost',
          type: 'string',
          message: expect.any(String)
        })
      ])
    )
  })
  it('asks for remote db user', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(answers.base.admin.prompt).not.toEqual(undefined)
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'dbUser',
          type: 'string',
          message: expect.any(String)
        })
      ])
    )
  })
  it('asks for remote db password', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(answers.base.admin.prompt).not.toEqual(undefined)
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'dbPass',
          type: 'string',
          message: expect.any(String)
        })
      ])
    )
  })

  it('asks for remote redis host', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(answers.base.admin.prompt).not.toEqual(undefined)
    expect(inquirer.prompt).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'redisHost',
          type: 'string',
          message: expect.any(String)
        })
      ])
    )
  })
})
