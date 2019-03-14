import subject from './'
import setImageRepository from './setImageRepository/index'
import setSubdomain from './setSubdomain/index'

jest.mock('./setSubdomain/index', () => jest.fn(answers => answers))
jest.mock('./setImageRepository/index', () => jest.fn(answers => answers))
const fakeSlug = 'happy-cats-subdomain'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Generate Frontend Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('set image repository', async () => {
    const answers = await subject(fakeAnswers)
    expect(setImageRepository).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('set random subdomain', async () => {
    const answers = await subject(fakeAnswers)
    expect(setSubdomain).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
