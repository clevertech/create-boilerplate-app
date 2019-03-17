import fs from 'fs-extra'
import subject from './'

const replaceMe = 'replacementstring'
const replaceWithMe = 'NEWSTRING'
const mockPath = 'mockpath'
const mockFile =
  'This is a file with a ((.*--/\\' +
  replaceMe +
  '\\//-)*.init. I want both ' +
  replaceMe +
  ' entries to be replaced.'
jest.mock('fs-extra')

fs.readFile.mockImplementation(async path => {
  if (path === mockPath) return mockFile
})
fs.writeFile.mockImplementation(async () => mockFile)

describe('replaceStringInFile', () => {
  afterEach(jest.clearAllMocks)

  it('does nothing with out first param: string to replace', async () => {
    const result = await subject(undefined, mockPath, replaceWithMe)
    expect(result).toBe(undefined)
    expect(fs.readFile).not.toHaveBeenCalled()
    expect(fs.writeFile).not.toHaveBeenCalled()
  })

  it('does nothing with out second param: filepath', async () => {
    const result = await subject(replaceMe, undefined, replaceWithMe)
    expect(result).toBe(undefined)
    expect(fs.readFile).not.toHaveBeenCalled()
    expect(fs.writeFile).not.toHaveBeenCalled()
  })

  it('does nothing with out third param: replacement value', async () => {
    const result = await subject(replaceMe, mockPath, undefined)
    expect(result).toBe(undefined)
    expect(fs.readFile).not.toHaveBeenCalled()
    expect(fs.writeFile).not.toHaveBeenCalled()
  })

  it('replaces string in file given all parameters', async () => {
    const result = await subject(replaceMe, mockPath, replaceWithMe)
    const goodMatchString = new RegExp(replaceWithMe, 'g')
    const badMatchString = new RegExp(replaceMe, 'g')
    expect(fs.writeFile).toHaveBeenCalledWith(
      mockPath,
      expect.stringMatching(goodMatchString)
    )
    expect(fs.writeFile).not.toHaveBeenCalledWith(
      mockPath,
      expect.stringMatching(badMatchString)
    )
    expect(result).toEqual(expect.stringMatching(goodMatchString))
  })
})
