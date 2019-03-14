import subject from './'
import setImageRepository from './setImageRepository/index'
import setSubdomain from './setSubdomain/index'
import generateRandom from '../../../../utils/generateRandom'

jest.mock('./setSubdomain/index')
const fakeSlug = 'happy-cats-subdomain'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Generate Frontend Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('generate random subdomain', async () => {
    const answers = await subject(fakeAnswers)
    expect(setSubdomain).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
