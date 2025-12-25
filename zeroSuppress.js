/**
 * ゼロサプレス（ '00123' → '123' )
 * @returns {string}
 * @param   {string} - ゼロサプレス前の文字列（数字であること）
 */
function zeroSuppress( mojiretu ) {
  return +mojiretu.toString();
}
