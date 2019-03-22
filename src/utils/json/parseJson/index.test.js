import fs from 'fs-extra'
import subject from './'

describe('json utility', () => {
  afterEach(jest.clearAllMocks)
  it('does nothing with no params', async () => {
    const result = await subject()
    expect(result).toBe(undefined)
  })
})
