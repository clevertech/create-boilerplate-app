import configurePackageJson from './configurePackageJson'
import configurePrettierConfig from './configurePrettierConfig'
import configureDockerRun from './configureDockerRun'
import configureDockerCompose from './configureDockerCompose'
import configureEnvFile from './configureEnvFile'

const main = async function(answers) {
  answers = Object.assign({}, { base: {} }, answers)
  answers = await configurePackageJson(answers)
  answers = await configurePrettierConfig(answers)
  answers = await configureDockerRun(answers)
  answers = await configureDockerCompose(answers)
  answers = await configureEnvFile(answers)
  return answers
}

export default main

//
//
// const updateRootPackageJSON = async answers => {
//   const randomDev = generateRandom()
//   const randomStaging = generateRandom()
//   const packageJSONPath = path.join(basedir, 'package.json')
//   const packageJSON = require(packageJSONPath)
//   const name = dashify(answers.projectName)
//   packageJSON.name = name
//   packageJSON.description = answers.projectName
//   packageJSON.scripts.browse = 'browse'
//   packageJSON.devDependencies['@clevertech.biz/browse'] = '^0.1.2'
//   packageJSON.browse = {
//     sentry: `https://sentry.cleverbuild.biz/clevertech/${name}-sentry/`,
//     development: {
//       servers: {
//         api: `https://api-${name}-dev-${randomDev}.cleverbuild.biz/`,
//         frontend: `https://${name}-dev-${randomDev}.cleverbuild.biz/`
//       },
//       logs: {
//         api: sumologicLink(name, 'development', 'api'),
//         frontend: sumologicLink(name, 'development', 'frontend')
//       }
//     },
//     staging: {
//       servers: {
//         api: `https://api-${name}-staging-${randomStaging}.cleverbuild.biz/`,
//         frontend: `https://${name}-staging-${randomStaging}.cleverbuild.biz/`
//       },
//       logs: {
//         api: sumologicLink(name, 'staging', 'api'),
//         frontend: sumologicLink(name, 'staging', 'frontend')
//       }
//     },
//     production: {
//       servers: {
//         api: `https://api.example.com`,
//         frontend: `https://example.com/`
//       },
//       logs: {
//         api: sumologicLink(name, 'production', 'api'),
//         frontend: sumologicLink(name, 'production', 'frontend')
//       }
//     }
//   }
//
//   if (answers.databaseEngine === 'mysql') {
//     packageJSON.betterScripts['db-client'] =
//       'mysql -h 127.0.0.1 -u $DB_USER -p$DB_PASSWORD $DB_DATABASE'
//   }
//
//   await fs.writeFile(packageJSONPath, JSON.stringify(packageJSON, null, 2))
// }
//
// const updatePrettierConfiguration = async answers => {
//   const filePath = path.join(basedir, '.prettierrc.json')
//   const config = JSON.parse(await fs.readFile(filePath, 'utf8'))
//   config.semi = answers.semi
//   await fs.writeFile(filePath, JSON.stringify(config, null, 2))
// }
//
// const configureProjectName = async answers => {
//   const files = ['api/Makefile', 'frontend/Makefile', 'docker/run']
//   for (const file of files) {
//     const filePath = path.join(basedir, file)
//     // Some files do not exist if you are not a Clevertech employee
//     if (!await fs.exists(filePath)) continue
//     const source = await fs.readFile(filePath, 'utf8')
//     const sourceNew = source
//       .replace(/boilerplate/g, dashify(answers.projectName))
//       .replace(/Boilerplate/g, uppercamelcase(answers.projectName))
//     await fs.writeFile(filePath, sourceNew)
//   }
// }
//
// export default base
