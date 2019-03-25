import json from '../../../../utils/json'
import subject from './'

jest.mock('../../../../utils/json', () => jest.fn(() => ({})))
const fakeAnswers = {
  base: {
    prompt: {
      projectTitle: 'HappyCats'
    }
  },
  stack: {
    prompt: {
      dbEngine: '...'
    },
    apiDependenciess: []
  }
}
describe('Update Root Package JSON', () => {
  it('sets name and description', async () => {
    const answers = await subject(fakeAnswers)
    expect(json).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(/package.json/)
    )
    expect(json).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(/package.json/),
      expect.objectContaining({
        name: fakeAnswers.base.prompt.projectTitle,
        description: fakeAnswers.base.prompt.projectTitle
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
//   const name = dashify(answers.projectName)
//   packageJSON.name = name
//   packageJSON.description = answers.projectName
//
//   if (answers.databaseEngine === 'mysql') {
//     packageJSON.betterScripts['db-client'] =
//       'mysql -h 127.0.0.1 -u $DB_USER -p$DB_PASSWORD $DB_DATABASE'
//   }
//
//   await fs.writeFile(packageJSONPath, JSON.stringify(packageJSON, null, 2))
// }
