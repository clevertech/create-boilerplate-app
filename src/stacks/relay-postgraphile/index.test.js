const mockTest = () => {
  expect(false).toBe(true)
}
describe('Relay-Postgraphile configuration script', () => {
  it('configures RPG-specific API settings', () => {
    // setup project name
    // setup env file (database connection, etc.)
    // setup package.json file
    expect(false).toBe(true)
  })
  it('configures RPG-specific Frontend settings', () => {
    // setup project name
    // setup env file (CHOKIDIR_USEPOLLING, no SSR...)
    // setup package.json file
    expect(false).toBe(true)
  })
  it('configures RPG-specific docker-compose settings', mockTest)
  it('clone down stack', mockTest)
  it('mv stack files into boilerplate root', mockTest)
  it('delete empty stack folder', mockTest)
  it('prompt for stack questions', mockTest)
  it('apply index answers to stack configuration files', mockTest)
  it('apply stack answers to stack configuration files', mockTest)
})
