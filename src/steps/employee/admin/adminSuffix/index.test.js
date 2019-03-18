import subject from './index'

console.log = jest.fn()

describe('admin suffix', () => {
  it('returns answers when called', async () => {
    const fakeAnswers = { asdf: 12, dirName: 'fake-dir' }
    const answers = await subject(fakeAnswers)

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledWith()
    expect(console.log).toHaveBeenCalledWith(expect.any(String))
    expect(console.log).toHaveBeenCalledTimes(5)

    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
