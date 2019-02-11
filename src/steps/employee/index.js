const run = async function() {
  // await cloneRepo('boilerplate-extras', dir)
  //
  // const files = ['api/Makefile', 'frontend/Makefile', 'terraform']
  // if (deployMode === 'k8s') {
  //   files.push('buildspec-k8s-api.yml');
  //   files.push('buildspec-k8s-frontend.yml');
  // } else {
  //   files.push('buildspec-ecs-api.yml');
  //   files.push('buildspec-ecs-frontend.yml');
  // }
  //
  // // move files
  // await Promise.all(
  //   files.map(filename =>
  //     fs.move(path.join(dir, filename), path.join(basedir, filename.replace( /\-k8s|\-ecs/, '' )))
  //   )
  // )
  //
  // // add extra information to README
  // const readme = path.join(basedir, 'README.md')
  // const readmeExtra = path.join(dir, 'README-extra.md')
  // let source = await fs.readFile(readme)
  // source += '\n\n' + (await fs.readFile(readmeExtra))
  // await fs.writeFile(readme, source)
  //
  // // Remove cloned extras repo
  // await fs.remove(dir)
}

export default run
