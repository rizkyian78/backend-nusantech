// 1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.

// 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,

// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false

const fishBash = n => {
    for(let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('fish bash', i)
        } else if(i % 3 == 0){
            console.log('fish', i)
        } else if(i % 5 == 0) {
            console.log('bash', i)
        } else {
            console.log(i)
        }
    }
}

fishBash(50)

const sort = (arr, type) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(type == 'asc') {
                if(arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                } 
            } else if( type == 'desc' && arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
             
            }
        }
    }
    console.log(arr)
}

sort([2, 10, 3, 6, 7], 'desc')

const checkWord = s => {
    let word = ''
    for(let i = s.length - 1; i >= 0; i--) {
        word += s[i]
    }
    console.log(s == word)
}
checkWord('imam')