/**
 * ゼロサプレス（ '00123' → '123' )
 * @returns {string}
 * @param   {string} mojiretu - ゼロサプレス前の文字列（数字であること）
 */
function zeroSuppress( mojiretu ) {
  return +mojiretu.toString();
}
