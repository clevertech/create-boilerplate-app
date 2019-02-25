import fs from 'fs-extra'
import subject from './'

fs.writeFile = jest.fn()
fs.readFile = jest.fn(() => '{ "semi": false }')

describe('prettier config utility', () => {
  afterEach(jest.clearAllMocks)
  it('does nothing with no params', async () => {
    const result = await subject()
    expect(result).toBe(undefined)
  })
  it("retrieve's prettier config with one param", async () => {
    const result = await subject('.prettierrc')
    expect(result.semi).toEqual(false)
  })
  it('can update prettier config  file with 2nd param', async () => {
    const result = await subject('.prettierrc', { rootJson: false, semi: true })
    expect(result.rootJson).toEqual(false)
    expect(result.semi).toEqual(true)
    expect(fs.writeFile).toHaveBeenCalledWith(
      '.prettierrc',
      expect.stringMatching(/"semi": true/)
    )
  })
})
