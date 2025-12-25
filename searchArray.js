/**
 * 検索文字列と部分一致している配列を返す *****
 * @returns {string[]} - 部分一致している配列
 * @param   {string}   searchText - 検索文字列
 * @param   {string[]} sourceArray - 検索元の配列
 */
function searchArray( searchText, sourceArray ){
  return sourceArray.filter( ( line ) => {
    searchText == '' ? true : line.indexOf( searchText ) != -1;
  } );
}
