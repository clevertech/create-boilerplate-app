import subject from '.'

describe('Configuration cleanup', () => {
  it('returns dirname from argv[2]', () => {
    const values = subject()
    process.argv[2] = 'purpleflowers'
    expect(values).toBe(expect.objectContaining({ dirName: 'purpleflowers' }))
  })
  it('returns basedir from processing argv[2]', () => {
    const values = subject()
    process.argv[2] = 'purpleflowers'
    expect(values).toBe(
      expect.objectContaining({ baseDir: expect.any(String) })
    )
  })
})
