import subject from './'
import path from 'path'
import fs from 'fs-extra'
import { Z_FIXED } from 'zlib'

jest.mock('fs-extra')

const fakeSlug = 'project_slug'
const fakeDir = 'myProjectDir'
const fakeAnswers = {
  dirName: fakeDir,
  base: { prompt: { admin: true, projectSlug: fakeSlug } }
}

const readmeMock = 'READMEMOCK'
const readmeExtraMock = 'READMEEXTRAMOCK'

fs.readFile = jest.fn(async path => {
  if (path === 'README.md') return readmeMock
  if (path === 'README-extra.md') return readmeExtraMock
})

describe('Extends readme', () => {
  afterEach(jest.clearAllMocks)
  it('Reading from directory', async () => {
    const answers = await subject(fakeAnswers)

    expect(fs.writeFile).toBeCalledWith('README.md+"\n\n"+README-extra.md')

    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
