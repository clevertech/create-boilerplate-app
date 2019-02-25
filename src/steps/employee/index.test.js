import cloneExtra from './cloneExtra'
import moveExtra from './moveExtra'
import configureExtra from './configureExtra'
import cleanupExtra from './cleanupExtra'

import subject from './'

jest.mock('./cloneExtra', () => jest.fn(answers => answers))
jest.mock('./moveExtra', () => jest.fn(answers => answers))
jest.mock('./configureExtra', () => jest.fn(answers => answers))
jest.mock('./cleanupExtra', () => jest.fn(answers => answers))

let fakeAnswers
describe('Employee-specific configuration', () => {
  beforeEach(() => (fakeAnswers = { base: { prompt: { employee: true } } }))
  afterEach(jest.clearAllMocks)
  it("does nothing if we're not an employee", async () => {
    fakeAnswers.base.prompt.employee = false
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(cloneExtra).not.toHaveBeenCalled()
  })

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
