import './steps/start'
jest.mock('./steps/start')

describe('entrypoint', () => {
  it('calls start', () => {
    expect(start()).toHaveBeenCalled()
  })
})
