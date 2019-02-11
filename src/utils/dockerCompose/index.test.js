import subject from './'

describe('docker-compose utility', () => {
  afterEach(jest.resetAllMocks)

  it('does nothing with no params', async () => {
    const result = await subject()
    expect(result).toEqual(undefined)
  })

  it("retrieve's docker-compose file when called with one param", async () => {
    const result = await subject('docker-compose.yml')
    expect(result.rootJson).toEqual(true)
  })

  it('will update docker-compose file when called with 2nd param', async () => {
    const result = await subject('package.json', { rootJson: false })
    expect(result.rootJson).toEqual(false)
    expect(fs.writeFile).toHaveBeenCalledWith(
      'package.json',
      expect.stringMatching(/"rootJson": false/)
    )
  })
})
