import start from './steps/start'

jest.mock('./steps/start')

describe('entrypoint', () => {
  it('calls start when imported', () => {
    expect(start).toHaveBeenCalled()
  })
})
