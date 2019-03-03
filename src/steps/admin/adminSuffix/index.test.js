import subject from '.'
global.console = { log: jest.fn() }
describe('admin suffix', () => {
  it('returns answers when called', async () => {
    const fakeAnswers = { asdf: 12 }
    const answers = await subject(fakeAnswers)
    expect(global.console.log).toHaveBeenCalled()
    expect(answers).toBe(fakeAnswers)
  })
})
