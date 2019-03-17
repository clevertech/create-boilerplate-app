import subject from './'
import fs from 'fs'

jest.mock('fs')

fs.readFile.mockImplementation((path, options, callback) =>
  callback(null, 'rootDocker: true')
)
fs.writeFile.mockImplementation((path, options, callback) =>
  callback(null, 'rootDocker: true')
)

describe('yaml utility', async () => {
  afterEach(jest.clearAllMocks)

  it('does nothing with no params', async () => {
    const result = await subject()
    expect(result).toEqual(undefined)
  })

  it('retrieves docker-compose file when called with one param', async () => {
    const result = await subject('__mocks__/docker-compose.yml')
    expect(fs.readFile).toHaveBeenCalledWith(
      '__mocks__/docker-compose.yml',
      expect.anything(),
      expect.any(Function)
    )
    expect(result.rootDocker).toEqual(true)
  })

  it('will update docker-compose file when called with 2nd param', async () => {
    const result = await subject('__mocks__/docker-compose.yml', {
      rootDocker: false
    })
    expect(result.rootDocker).toEqual(false)
    expect(fs.writeFile).toHaveBeenCalledWith(
      '__mocks__/docker-compose.yml',
      expect.stringMatching(/rootDocker: false/),
      expect.any(Function)
    )

    const result2 = await subject('__mocks__/docker-compose.yml', {
      rootDocker: true
    })
    expect(result2.rootDocker).toEqual(true)
    expect(fs.writeFile).toHaveBeenCalledWith(
      '__mocks__/docker-compose.yml',
      expect.stringMatching(/rootDocker: true/),
      expect.any(Function)
    )
  })
})
