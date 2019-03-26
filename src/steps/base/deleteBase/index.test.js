import exec from '../../../utils/exec'
import subject from './'

jest.mock('../../../utils/exec', () => jest.fn(answers => answers))

const mockBaseDir = 'mockbasedir/'
const fakeAnswers = { baseDir: mockBaseDir }
describe('Base step: Delete', () => {
  test.todo('deletes the left-over base folder')
})
