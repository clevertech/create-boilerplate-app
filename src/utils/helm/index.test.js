import subject from './'
import fs from 'fs'

jest.mock('fs')

fs.readFile.mockImplementation((path, options, callback) =>
  callback(null, 'rootHelm: true')
)
fs.writeFile.mockImplementation((path, options, callback) =>
  callback(null, 'rootHelm: true')
)

describe('helm utility', async () => {
  afterEach(jest.clearAllMocks)

  it('does nothing with no params', async () => {
    const result = await subject()
    expect(result).toEqual(undefined)
  })

  it('retrieves helm file when called with one param', async () => {
    const result = await subject('__mocks__/helm.yml')
    expect(fs.readFile).toHaveBeenCalledWith(
      '__mocks__/helm.yml',
      expect.anything(),
      expect.any(Function)
    )
    expect(result.rootHelm).toEqual(true)
  })

  it('will update helm file when called with 2nd param', async () => {
    const result = await subject('__mocks__/helm.yml', {
      rootHelm: false
    })
    expect(result.rootHelm).toEqual(false)
    expect(fs.writeFile).toHaveBeenCalledWith(
      '__mocks__/helm.yml',
      expect.stringMatching(/rootHelm: false/),
      expect.any(Function)
    )

    const result2 = await subject('__mocks__/helm.yml', {
      rootHelm: true
    })
    expect(result2.rootHelm).toEqual(true)
    expect(fs.writeFile).toHaveBeenCalledWith(
      '__mocks__/helm.yml',
      expect.stringMatching(/rootHelm: true/),
      expect.any(Function)
    )
  })
})
