import deleteGitDir from './deleteGitDir'
import initGitDir from './initGitDir'
import installYarnDeps from './installYarnDeps'
import initialCommit from './initialCommit'

import subject from './'

jest.mock('./deleteGitDir')
jest.mock('./initGitDir')
jest.mock('./installYarnDeps')
jest.mock('./initialCommit')

const fakeAnswers = { test: 'asdf' }
describe('Configuration cleanup', () => {
  beforeEach(() => {
    subject(fakeAnswers)
  })
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('deletes boilerplate git dir', () => {
    expect(deleteGitDir).toHaveBeenCalledWith(fakeAnswers)
  })
  it('inits new git project', () => {
    expect(initGitDir).toHaveBeenCalledWith(fakeAnswers)
  })
  it('installs yarn dependencies', () => {
    expect(installYarnDeps).toHaveBeenCalledWith(fakeAnswers)
  })
  it('makes the initial commit', () => {
    expect(initialCommit).toHaveBeenCalledWith(fakeAnswers)
  })
})
