
/**
 * Ectract even and off characters.
 *
 * @param {String} str
 * @return {Array}
 * @api public
 */

module.exports = str => {
  let even = ''
  let odd = ''
  for (var i = 0, l = str.length; i < l; i++) {
    const char = str[i]
    if (!(i % 2)) even += char
    else odd += char
  }
  return [even, odd]
}
