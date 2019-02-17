import subject from '.'
const fakeAnswers = { projectSlug: 'slug', projectTitle: 'title' }
describe('Base configuration of project name', () => {
  beforeEach(() => subject(fakeAnswers))
  test.todo(
    'makes sure all boilerplate name references in base files are overwritten with answer value'
  ) // Specifically Makefiles and Dockerfiles
})
