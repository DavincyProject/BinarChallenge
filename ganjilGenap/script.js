/* 
Buatlah sebuah function yang berfungsi mendeteksi apakah sebuah angka termasuk angka genap atau ganjil.
Function ini akan menerima satu parameter, yaitu :
1. givenNumber ⇒ angka yang akan dicheck oleh function

Kriteria function yang harus kamu buat:
 • Beri nama function tersebut checkTypeNumber
 • Menggunakan arrow function
 • function ini harus return data dengan tipe string
 • function ini harus return data berupa GENAP ATAU GANJIL
 • function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.
*/

const checkTypeNumber = (givenNumber) => {
    if (typeof givenNumber !== 'number') {
        return "Error : Invalid data type";
    }

    if (givenNumber === undefined) {
        return "Error : Bro Where is the parameter?";
    }

    if (givenNumber % 2 === 0) {
        return "GENAP";
    } else {
        return "GANJIL";
    }
}

console.log(checkTypeNumber(10)); // GENAP
console.log(checkTypeNumber(3)); // GANJIL
console.log(checkTypeNumber("3")); // Error : Invalid data type
console.log(checkTypeNumber({}));  // Error : Invalid data type
console.log(checkTypeNumber([])); // Error : Invalid data type
console.log(checkTypeNumber()); // Error : Bro Where is the parameter?