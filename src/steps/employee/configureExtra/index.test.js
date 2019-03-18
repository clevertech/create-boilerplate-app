import setProjectNameMakefile from './setProjectNameMakefile'
import setReadme from './setReadme'
import subject from '.'

const fakeSlug = 'happy-cats-two'
const fakeDir = 'myProjectDir'
const fakeAnswers = {
  bdirName: fakeDir,
  base: { prompt: { admin: true, projectSlug: fakeSlug } }
}

jest.mock('./setProjectNameMakefile', () => jest.fn(answers => answers))
jest.mock('./setReadme', () => jest.fn(answers => answers))

describe('Configuration of extra files', () => {
  it('writes project name to Makefiles', async () => {
    const answers = await subject(fakeAnswers)
    expect(setProjectNameMakefile).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('extends readme', async () => {
    const answers = await subject(fakeAnswers)
    expect(setReadme).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  test.todo('uses project name for Helm repository')
  test.todo('uses project name for Helm subdomain')
})
