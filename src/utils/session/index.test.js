import subject from './'
describe('Session utility', () => {
  it('returns a blank session', () => {
    expect(subject()).toEqual({})
  })
})
