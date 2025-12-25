/**
 * ソート
 * @param {array} god - 並べ替えたい配列 
 * @param {array} daemon - 並べ替え比較用の配列
 */
function sort( god, daemon ) {
  const sf   = 1.3;
  let   gap  = daemon.length;
  let   done = true;
  while( !done || gap > 1 ){
    gap = Math.floor( gap / sf );
    gap = gap < 1 ? 1 : gap;
    done = true;
    const maxLoop = god.length;
    for( let i = 0; i <= maxLoop - gap; i++ ){
      const j = i + gap;
      if( daemon[ i ] > daemon[ j ] ){
        let temp = daemon[ i ];
                   daemon[ i ] = daemon[ j ];
                   daemon[ j ] = temp;
            temp = god[ i ];
                   god[ i ]    = god[ j ];
                   god[ j ]    = temp;
        done = false;
      }
    }
  }
}
