import subject from './'
console.log = jest.fn()
describe('Suffix step', () => {
  it('prints a post-setup message', async () => {
    await subject()
    expect(console.log).toHaveBeenCalledWith(expect.any(String))
  })
})
