import subject from './'
import fs from 'fs-extra'

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
  if (/README\.md/.test(path)) return readmeMock
  if (/README-extra\.md/.test(path)) return readmeExtraMock
})

describe('Readme configuration', () => {
  afterEach(jest.clearAllMocks)
  it('Appends readme-extra to readme', async () => {
    const answers = await subject(fakeAnswers)
    const matchString = new RegExp(readmeMock + '\n\n' + readmeExtraMock)

    expect(fs.writeFile).toBeCalledWith(
      expect.any(String),
      expect.stringMatching(matchString)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
