import cloneExtra from './cloneExtra'
import moveExtra from './moveExtra'
import configureExtra from './configureExtra'
import cleanupExtra from './cleanupExtra'

import subject from './'

jest.mock('./cloneExtra')
jest.mock('./moveExtra')
jest.mock('./configureExtra')
jest.mock('./cleanupExtra')

const fakeAnswers = { test: 123123 }
describe('Employee-specific configuration', () => {
  beforeEach(() => subject(fakeAnswers))
  afterEach(jest.resetAllMocks)

  // cloneExtra()
  test.todo('clones down boilerplate-extras repo', () => {
    expect(cloneExtra).toHaveBeenCalledWith(fakeAnswers)
  })

  // moveExtra()
  test.todo('moves select boilerplate-extra files into place', () => {
    expect(moveExtra).toHaveBeenCalledWith(fakeAnswers)
  })

  // configureExtra()
  test.todo('configures extra files', () => {
    expect(configureExtra).toHaveBeenCalledWith(fakeAnswers)
  })

  // cleanupExtra()
  test.todo('removes boilerplate-extra left overs', () => {
    expect(cleanupExtra).toHaveBeenCalledWith(fakeAnswers)
  })
})
