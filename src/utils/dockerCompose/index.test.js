import subject from './'
import fs from 'fs'

jest.spyOn(fs, 'writeFile')

describe('docker-compose utility', () => {
  afterEach(jest.resetAllMocks)

  it('does nothing with no params', async done => {
    const result = await subject()
    expect(result).toEqual(undefined)
    done()
  })

  it('retrieves docker-compose file when called with one param', async done => {
    const oldRead = fs.readFile
    fs.readFile = jest.fn()
    fs.readFile.mockReturnValue('rootDocker: true')
    const result = await subject('__mocks__/docker-compose.yml')
    expect(result.rootDocker).toEqual(true)
    fs.readFile = oldRead
    done()
  })

  it('will update docker-compose file when called with 2nd param', async done => {
    const result = await subject('__mocks__/docker-compose.yml', {
      rootDocker: false
    })
    expect(result.rootDocker).toEqual(false)
    expect(fs.writeFile).toHaveBeenCalledWith(
      '__mocks__/docker-compose.yml',
      expect.stringMatching(/rootDocker: false/)
    )
    const result2 = await subject('__mocks__/docker-compose.yml', {
      rootDocker: true
    })
    expect(result2.rootDocker).toEqual(true)
    expect(fs.writeFile).toHaveBeenCalledWith(
      '__mocks__/docker-compose.yml',
      expect.stringMatching(/rootDocker: true/)
    )
    done()
  })
})
