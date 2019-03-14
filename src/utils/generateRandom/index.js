import generate from 'nanoid/generate'
const run = function(length) {
  return generate(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    length
  )
}
export default run
