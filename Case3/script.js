/* 
Buatlah sebuah function yang berfungsi untuk mendapatkan angka terbesar kedua dari sebuah array.
Misal diberikan sebuah array yang terdiri dari beberapa angka[2, 3, 5, 6, 6, 4], berdasarkan data 
dari array tersebut dapat kita simpulkan bahwasanya angka terbesar dari array tersebut adalah 6, 
angka kedua terbesar adalah 5, dan angka ketiga terbesar adalah 4. Maka dari itu function yang akan 
kamu buat ini akan me-return angka kedua terbesar pada array yang telah diberikan, yaitu angka 5.

Function ini akan menerima satu parameter, yaitu:
dataNumbers ⇒ Array yang berisi beberapa angka Kriteria function:

1. Beri nama function tersebut getAngkaTerbesarKedua
2. function ini harus return data dengan tipe number
3. function ini harus return data angka terbesar kedua dari angka - angka yang diberikan di dalam array
4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.
*/

function getAngkaTerbesarKedua(dataArray) {
    if (!Array.isArray(dataArray) || dataArray.length < 2) { //mengecek apakah parameter yang dikirim berupa array & jika array kurang dari 2 angka
        return "Error: Parameter tidak valid";
    }

    const arraySort = dataArray.sort((a, b) => b - a); //mengurutkan arraynya kemudian dibalikan mulai dari besar ke kecil
    return arraySort[1];
}

const dataAray = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAray));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
