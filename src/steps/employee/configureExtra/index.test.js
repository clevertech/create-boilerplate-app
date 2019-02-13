describe('Configuration of extra files', () => {
  it('extends readme', () => {
    expect(configureExtra).toHaveBeenCalledWith(fakeAnswers)
  })
  test.todo('writes project name to Makefiles (API and Frontend)')
  test.todo('uses project name for Helm repository')
  test.todo('uses project name for Helm subdomain')
})
