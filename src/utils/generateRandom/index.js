import generate from 'nanoid/generate'
const run = async function(length) {
  return generate(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    length
  )
}
export default run
