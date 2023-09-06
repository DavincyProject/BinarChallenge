/* 
Tugas kamu adalah membuat sebuah function yang berfungsi 
membantu Pak Aldi untuk menghitung total seluruh sepatu 
yang terjual.

Function ini akan menerima satu parameter, yaitu:
1. dataPenjualan ⇒ Array yang berisi beberapa object,
object terdiri dari properti yang memiliki informasi 
penjualan product.

Kriteria function:
1. Beri nama function tersebut getTotalPenjualan
2. function ini harus return data dengan tipe number
3. function ini harus return total penjumlahan dari
properti totalTerjual pada data yang diberikan
4. function ini harus memiliki validasi terhadap tipe 
data dari parameter yang diterima.
*/

const dataPenjualanPakAldi = [
    {
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High ',
        kategori: "Sepatu Sneaker",
        hargaSatuan: 360000,
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    }
]

function getTotalPenjualan(dataPenjualanPakAldi) {
    if (!Array.isArray(dataPenjualanPakAldi)) {
        return "Error: Parameter tidak valid";
    } else {
        let totalPenjualan = 0
        for (let i = 0; i < dataPenjualanPakAldi.length; i++) {
            totalPenjualan += dataPenjualanPakAldi[i].totalTerjual
        }
        return totalPenjualan;
    }
}


console.log(getTotalPenjualan(dataPenjualanPakAldi));