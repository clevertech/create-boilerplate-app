import subject from './'
import path from 'path'
import fs from 'fs-extra'

jest.mock('path')
jest.mock('fs-extra')

const fakeSlug = 'project_slug'
const fakeDir = 'myProjectDir'
const fakeAnswers = {
  dirName: fakeDir,
  base: { prompt: { admin: true, projectSlug: fakeSlug } }
}

const mockAnswerString = 'some-string-readme'
path.resolve.mockReturnValueOnce(fakeDir)
fs.readFile.mockReturnValueOnce('mockAnswerString')

describe('Extends readme', () => {
  afterEach(jest.clearAllMocks)
  it('Reading from directory', async () => {
    const answers = await subject(fakeAnswers)

    // trying to set path.join, but failing
    expect(path.join).toEqual([
      [fakeDir, 'README.md'],
      ['boilerplate-extras', 'README-extra.md']
    ])

    // trying to assert at least 2nd param as a string, but failing as well
    expect(fs.writeFile).toHaveBeenCalledWith(mockAnswerString)

    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
