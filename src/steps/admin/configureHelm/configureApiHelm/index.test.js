import subject from './'
import setImageRepository from './setImageRepository'
import setSubdomain from './setSubdomain'
import setRedisInfo from './setRedisInfo'
import setDbInfo from './setDbInfo'
import setSecrets from './setSecrets'

jest.mock('./setImageRepository', () => jest.fn(async answers => answers))
jest.mock('./setSubdomain', () => jest.fn(async answers => answers))
jest.mock('./setRedisInfo', () => jest.fn(async answers => answers))
jest.mock('./setDbInfo', () => jest.fn(async answers => answers))
jest.mock('./setSecrets', () => jest.fn(async answers => answers))

const fakeSlug = 'happy-cats-two'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }
describe('Generate API Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('sets helm deployment image repository', async () => {
    const answers = await subject(fakeAnswers)
    expect(setImageRepository).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('sets helm deployment subdomain', async () => {
    const answers = await subject(fakeAnswers)
    expect(setSubdomain).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('sets redis info', async () => {
    const answers = await subject(fakeAnswers)
    expect(setRedisInfo).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('sets db info', async () => {
    const answers = await subject(fakeAnswers)
    expect(setDbInfo).toHaveBeenCalledWith(expect.objectContaining(fakeAnswers))
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('sets secrets', async () => {
    const answers = await subject(fakeAnswers)
    expect(setSecrets).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
