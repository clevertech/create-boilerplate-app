import subject from './index'
import yaml from '../../../../../../utils/yaml'

const mockYaml = {
  ingress: {
    hosts: [
      {
        rules: [
          {
            subdomain: 'boilerplate_randomvalue'
          }
        ]
      }
    ]
  }
}
jest.mock('../../../../../../utils/yaml', () => jest.fn(() => mockYaml))

const fakeSlug = 'project_slug'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Admin ConfigureApiHelm: setSubdomain', () => {
  afterEach(jest.clearAllMocks)
  it('sets boilerplate in subdomain', async () => {
    const answers = await subject(fakeAnswers)
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/\.\/helm\/api\.yml/),
      expect.objectContaining({
        ingress: expect.objectContaining({
          hosts: expect.arrayContaining([
            expect.objectContaining({
              rules: expect.arrayContaining([
                expect.objectContaining({
                  subdomain: expect.stringMatching(
                    new RegExp(fakeAnswers.base.prompt.projectSlug)
                  )
                })
              ])
            })
          ])
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('sets randomValue in subdomain', async () => {
    const answers = await subject(fakeAnswers)
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/\.\/helm\/api\.yml/),
      expect.objectContaining({
        ingress: expect.objectContaining({
          hosts: expect.arrayContaining([
            expect.objectContaining({
              rules: expect.arrayContaining([
                expect.objectContaining({
                  subdomain: expect.not.stringMatching(
                    new RegExp('randomString')
                  )
                })
              ])
            })
          ])
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
