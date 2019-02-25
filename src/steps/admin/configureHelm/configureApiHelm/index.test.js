import subject from './'

const fakeAnswers = { base: { prompt: { admin: true } } }
describe('Generate API Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('configures api helm script', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
