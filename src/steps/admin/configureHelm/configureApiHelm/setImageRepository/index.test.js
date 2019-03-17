import subject from './'
import yaml from '../../../../../utils/yaml'

const mockYaml = {}
jest.mock('../../../../../utils/yaml', () => jest.fn(() => mockYaml))

const fakeSlug = 'project_slug'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Admin ConfigureApiHelm: setImageRepository', () => {
  afterEach(jest.clearAllMocks)
  test.todo('setImageRepository')
  // expect(yaml).toHaveBeenCalledWith(
  //   expect.stringMatching(/helm-api-development.yml/),
  //   expect.objectContaining({
  //     helm: expect.objectContaining({
  //       deployment: expect.objectContaining({
  //         image: expect.objectContaining({
  //           repository: expect.stringMatching(
  //             new RegExp(fakeAnswers.base.prompt.projectSlug)
  //           )
  //         })
  //       })
  //     })
  //   })
  // )
  // expect(answers).toEqual(expect.objectContaining(fakeAnswers))
})
