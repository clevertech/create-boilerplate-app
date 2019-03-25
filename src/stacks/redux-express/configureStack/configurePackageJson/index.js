import json from '../../../../utils/json'

const run = async function(answers) {
  const path = answers.baseDir + 'package.json'
  const pjson = await json(path)
  pjson.betterScripts = pjson.betterScripts || {}

  if (answers.stack.prompt.dbEngine === 'mysql') {
    pjson.betterScripts['db-client'] =
      'mysql -h 127.0.0.1 -u $DB_USER -p$DB_PASSWORD $DB_DATABASE'
  }
  if (answers.stack.prompt.dbEngine === 'postgres') {
    pjson.betterScripts['db-client'] =
      'psql -h 127.0.0.1 -U $DB_USER $DB_DATABASE' // psql cannot take the password on the commandline, create a ~/.pgpass
  }

  await json(path, pjson)
  return answers
}

export default run
