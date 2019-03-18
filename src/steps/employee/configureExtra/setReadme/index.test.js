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

describe('Extends readme', () => {
  afterEach(jest.clearAllMocks)
  it('Reading from directory', async () => {
    const answers = await subject(fakeAnswers)

    expect(path.resolve).toHaveBeenCalledWith(process.cwd(), fakeDir)
    expect(path.join).toHaveBeenCalled()
    expect(fs.writeFile).toHaveBeenCalled()

    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
