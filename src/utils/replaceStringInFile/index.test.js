import fs from 'fs'

import subject from './'

const mockDockerRun = 'someStuff=boilerplate'
jest.mock('fs')
fs.readFile.mockImplementation(file =>
  file === 'docker/run' ? mockDockerRun : undefined
)
jest.mock('docker/run', () => mockDockerRun, { virtual: true })

const fakeProjectSlug = 'a-project-slug'

describe('docker/run utility', () => {
  afterEach(jest.clearAllMocks)

  it('does nothing with no params', async () => {
    const result = await subject()
    expect(result).toBe(undefined)
  })

  it("retrieve's docker/run file with path param", async () => {
    const result = await subject('docker/run')
    expect(result).toEqual(mockDockerRun)
  })

  it('updates compose project name with second param', async () => {
    const result = await subject('docker/run', fakeProjectSlug)
    const matchString = new RegExp('someStuff=' + fakeProjectSlug)
    expect(fs.writeFile).toHaveBeenCalledWith(
      'docker/run',
      expect.stringMatching(matchString)
    )
    expect(result).toEqual(expect.stringMatching(matchString))
  })
})
