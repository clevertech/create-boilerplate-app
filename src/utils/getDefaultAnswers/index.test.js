import subject from '.'

const projectName = 'purpleflowers'
describe('Get Default Answers utility', () => {
  beforeEach(() => {
    process.argv[2] = projectName
  })
  it('returns dirname from argv[2]', () => {
    const values = subject()
    expect(values.dirName).toBe(projectName)
  })
  it('returns basedir from processing argv[2]', () => {
    const values = subject()
    expect(values.baseDir).toMatch(RegExp(projectName + '$'))
  })
})
