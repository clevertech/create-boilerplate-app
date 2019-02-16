import cloneExtra from './cloneExtra'
import moveExtra from './moveExtra'
import configureExtra from './configureExtra'
import cleanupExtra from './cleanupExtra'

import subject from './'

jest.mock('./cloneExtra', () => jest.fn(answers => answers))
jest.mock('./moveExtra', () => jest.fn(answers => answers))
jest.mock('./configureExtra', () => jest.fn(answers => answers))
jest.mock('./cleanupExtra', () => jest.fn(answers => answers))

const fakeAnswers = { test: 123123 }
describe('Employee-specific configuration', () => {
  afterEach(jest.clearAllMocks)

  // moveExtra()
  it('moves select boilerplate-extra files into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(moveExtra).toHaveBeenCalledWith(fakeAnswers)
  })

  it('clones down boilerplate-extras repo', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(cloneExtra).toHaveBeenCalledWith(fakeAnswers)
  })

  // configureExtra()
  it('configures extra files', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(configureExtra).toHaveBeenCalledWith(fakeAnswers)
  })

  // cleanupExtra()
  it('removes boilerplate-extra left overs', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(cleanupExtra).toHaveBeenCalledWith(fakeAnswers)
  })
})
