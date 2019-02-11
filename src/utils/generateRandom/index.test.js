import subject from './'
describe('Generate random utility', () => {
  it('Generates a random, case-sensitive alpha-numeric string with a length requirement', async () => {
    const randomString = await subject(10)
    expect(randomString).toEqual(
      expect.stringMatching(
        /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{10}/
      )
    )
  })
})
