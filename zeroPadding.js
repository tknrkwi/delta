/**
 * 指定桁でゼロ埋めする（ゼロパディング）
 * @returns {string}
 * @param   {string} mojiretu - ゼロ埋め対象の文字列 
 * @param   {number} keta - ゼロ埋め後の桁数
 */
function zeroPadding( mojiretu, keta ) {
  return mojiretu.padStart( keta, '0' );
}
