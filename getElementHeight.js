/**
 * DOM要素の高さを数値で返す
 * @returns {number} - ビクセル値
 * @param {string} id - エレメントのID
 */
function getElementHeight( elementId ){
  return document.getElementById( elementId ).offsetHeight; 
}
