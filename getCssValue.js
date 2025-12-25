/**
 * CSS変数を取得する
 * @returns {string}
 * @param {string} - CSS変数名
 */
function getCssValue( valueName ){
	return( getComputedStyle( document.documentElement ).getPropertyValue( valueName ).trim() );
}
