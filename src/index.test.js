import start from './steps/start'
jest.mock('./steps/start')

import subject from './'

describe('entrypoint', () => {
  it('calls start when imported', () => {
    expect(start).toHaveBeenCalled()
  })
})
