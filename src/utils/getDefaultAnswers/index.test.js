import subject from '.'

describe('Configuration cleanup', () => {
  it('returns dirname from argv[2]', () => {
    process.argv[2] = 'purpleflowers'
    const values = subject()
    expect(values).toBe(expect.objectContaining({ dirName: 'purpleflowers' }))
  })
  it('returns basedir from processing argv[2]', () => {
    process.argv[2] = 'purpleflowers'
    const values = subject()
    expect(values).toBe(
      expect.objectContaining({ baseDir: expect.any(String) })
    )
  })
})
