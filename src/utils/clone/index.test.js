import exec from '../exec'
import subject from './'

jest.mock('../exec')
describe('Clone util', () => {
  it('clones down a git repo by URL into the current working directory', async () => {
    const repo = 'someRepo'
    const destination = 'someDestionation'
    await subject(repo, destination)
    expect(exec).toHaveBeenCalledWith(
      `git clone ${repo} ${destination} --depth 1`
    )
  })
})
