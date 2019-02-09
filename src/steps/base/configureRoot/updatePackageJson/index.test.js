import generateRandom from '../../../../utils/generateRandom'

import subject from './'
describe('Update Root Package JSON', () => {
  it('uses correct project name', () => {
    const answers = { name: 'someprojectname' }
    subject(answers)
  })
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
})
