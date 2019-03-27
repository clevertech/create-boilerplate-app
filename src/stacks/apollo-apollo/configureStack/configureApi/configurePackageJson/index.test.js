import packageJson from '../../../../../utils/json'
import { getDatabaseConfig } from '../../../../../utils/databases'

import subject from './'

jest.mock('../../../../../utils/json', () => jest.fn(() => ({})))
const fakeAnswers = {
  base: {
    prompt: {
      projectTitle: 'HappyCats'
    }
  },
  stack: {
    prompt: {
      dbEngine: '...'
    },
    apiDependenciess: []
  }
}
describe('configure API package.json', async () => {
  afterEach(jest.clearAllMocks)
  it('writes name and description to package.json', async () => {
    const answers = await subject(fakeAnswers)
    expect(packageJson).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/api\/package\.json/)
    )
    expect(packageJson).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/api\/package\.json/),
      expect.objectContaining({
        name: fakeAnswers.base.prompt.projectTitle + '-API',
        description: fakeAnswers.base.prompt.projectTitle + ' API'
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('writes mysql dependencies to package.json', async () => {
    fakeAnswers.stack.prompt.dbEngine = 'mysql'
    const answers = await subject(fakeAnswers)
    expect(packageJson).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/api\/package\.json/)
    )
    expect(packageJson).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/api\/package\.json/),
      expect.objectContaining({
        apiDependencies: expect.objectContaining(
          getDatabaseConfig('mysql').deps
        )
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('writes postgresql dependencies to package.json', async () => {
    fakeAnswers.stack.prompt.dbEngine = 'postgres'
    const answers = await subject(fakeAnswers)
    expect(packageJson).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/api\/package\.json/)
    )
    expect(packageJson).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/api\/package\.json/),
      expect.objectContaining({
        apiDependencies: expect.objectContaining(
          getDatabaseConfig('postgres').deps
        )
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('should setup db client command for mysql', async () => {
    fakeAnswers.stack.prompt.dbEngine = 'mysql'
    const answers = await subject(fakeAnswers)
    expect(packageJson).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/package.json/)
    )
    expect(packageJson).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/package.json/),
      expect.objectContaining({
        betterScripts: { db: getDatabaseConfig('mysql').cmd }
      })
    )
    expect(packageJson).not.toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/package.json/),
      expect.objectContaining({
        betterScripts: { db: getDatabaseConfig('postgres').cmd }
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('should setup db client command for postgres', async () => {
    fakeAnswers.stack.prompt.dbEngine = 'postgres'
    const answers = await subject(fakeAnswers)
    expect(packageJson).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/package.json/)
    )
    expect(packageJson).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/package.json/),
      expect.objectContaining({
        betterScripts: { db: getDatabaseConfig('postgres').cmd }
      })
    )
    expect(packageJson).not.toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/package.json/),
      expect.objectContaining({
        betterScripts: { db: getDatabaseConfig('mysql').cmd }
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
