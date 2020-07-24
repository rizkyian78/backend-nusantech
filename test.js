function maze(n){
    // Nilai n harus positif dan n dapat dinyatakan dalam 4n - 1
    if((n + 1) % 4 !== 0 || n <= 0) console.log('Input must be integer where n is a positive integer')
    // Menggunakan nested loop untuk dapat akses nxn
    for (let i = 0; i < n; i++) {
        // initial value
        let result = ''
        for(let j = 0; j < n; j++) {
            // jika index i dan j mempunyai nilai berikut lakukan proses didalamnya
            if(i === 0 || i === n - 1 || j === 0 || j === n - 1 || i % 2 === 0) {
            // jika index i habis dibagi 4 dan nilai j = 1 beri spasi
             if(i % 4 === 0 && j === 1) result += ' '
            //  jika index i habis dibagi 2 dan tidak habis dibagi 4 dan index j nilainya sama dengan n - 2 beri spasi
             else if(i % 2 === 0 && i % 4 !== 0 && j === n - 2) result += ' '
            //  jika tidak ada di statement diatas beri '@'
             else result += '@'
        } else {
            // jika tidak memenuh statement diatas beri spasi
            result += ' '
        }
     }
    console.log(result)
    }
    // Break
    console.log('\n')
}
maze('h')
maze(-1)
maze(0)
  maze(15)