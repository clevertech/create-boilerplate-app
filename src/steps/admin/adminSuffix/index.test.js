import subject from '.'
describe('admin suffix', () => {
  it('returns answers when called', async () => {
    const fakeAnswers = { asdf: 12 }
    const answers = await subject(fakeAnswers)
    expect(answers).toBe(fakeAnswers)
  })
})
