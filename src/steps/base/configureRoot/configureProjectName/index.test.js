import subject from './'
const fakeAnswers = { projectSlug: 'slug', projectTitle: 'title' }
describe('Base configuration of project name', () => {
  beforeEach(() => subject(fakeAnswers))
  test.todo('configure project name in docker/run script')
  test.todo('configure project name in docker-compose script')
  test.todo('configure project name in COMPOSE_PROJECT_NAME env var')
  // description in sub-folders.  i.e. Clevertech API, Clevertech Frontend, Clevertech (in root package.json)
  test.todo(
    'makes sure all boilerplate name references in base files are overwritten with answer value'
  )
})
