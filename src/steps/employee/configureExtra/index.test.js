import subject from '.'

const fakeSlug = 'happy-cats-two'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Configuration of extra files', () => {
  jest.mock('./setProjectNameMakefile/index', () => jest.fn(answers => answers))

  it('writes project name to Makefiles', async () => {
    const answers = await subject(fakeAnswers)
    expect(setProjectNameMakefile).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  test.todo('extends readme')
  test.todo('uses project name for Helm repository')
  test.todo('uses project name for Helm subdomain')
})
