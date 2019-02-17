import subject from './'
import fs from 'fs'

jest.mock('fs')
jest.mock('package.json', () => ({ rootJson: true }), { virtual: true })

describe('package.json utility', () => {
  afterEach(jest.clearAllMocks)
  it('does nothing with no params', async () => {
    const result = await subject()
    expect(result).toBe(undefined)
  })
  it("retrieve's package.json file with one param", async () => {
    const result = await subject('package.json')
    expect(result.rootJson).toEqual(true)
  })
  it('can update package.json file with 2nd param', async () => {
    const result = await subject('package.json', { rootJson: false })
    expect(result.rootJson).toEqual(false)
    expect(fs.writeFile).toHaveBeenCalledWith(
      'package.json',
      expect.stringMatching(/\"rootJson\": false/)
    )
  })
})
