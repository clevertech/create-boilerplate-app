import deleteGitDir from './deleteGitDir'
import initGitDir from './initGitDir'
import installYarnDeps from './installYarnDeps'
import initialCommit from './initialCommit'

import subject from './'

jest.mock('./deleteGitDir', () => jest.fn(answers => answers))
jest.mock('./initGitDir', () => jest.fn(answers => answers))
jest.mock('./installYarnDeps', () => jest.fn(answers => answers))
jest.mock('./initialCommit', () => jest.fn(answers => answers))

const fakeAnswers = { test: 'asdf' }
describe('Configuration cleanup', async () => {
  afterEach(jest.clearAllMocks)

  it('deletes boilerplate git dir', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(deleteGitDir).toHaveBeenCalledWith(fakeAnswers)
  })
  it('inits new git project', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(initGitDir).toHaveBeenCalledWith(fakeAnswers)
  })
  it('installs yarn dependencies', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(installYarnDeps).toHaveBeenCalledWith(fakeAnswers)
  })
  it('makes the initial commit', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(initialCommit).toHaveBeenCalledWith(fakeAnswers)
  })
})
