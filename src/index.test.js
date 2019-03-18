import start from './steps/start'
import subject from './'

jest.mock('./steps/start')

describe('entrypoint', () => {
  it('calls start when imported', () => {
    subject()
    expect(start).toHaveBeenCalled()
  })
})
