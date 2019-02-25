import subject from './'

const fakeAnswers = { base: { prompt: { admin: true } } }
describe('Generate Frontend Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('configures admin helm script', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
