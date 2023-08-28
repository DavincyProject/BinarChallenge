/* 
Hari ini Toko buku milik Ibu Daniela berhasil menjual banyak sekali buku - buku novel.Gambar disamping adalah data penjualan
buku - buku novel yang dijual di Toko buku milik Ibu Daniela, dalam format array of object.
Tugas kamu adalah membuat sebuah function yang berfungsi membantu Ibu Daniela untuk mendapatkan informasi berupa Total 
Keuntungan, Total Modal, Produk Buku Terlaris, Penulis Buku terlaris dan Persentase Keuntungan dari data penjualan yang telah
disediakan diatas. funtion yang kamu buat ini akan me-return sebuah data yang berbentuk sebuah object yang dari beberapa properti.

Function ini akan menerima satu parameter, yaitu:
dataPenjualan ⇒ Array yang berisi beberapa object, object terdiri dari properti yang memiliki informasi penjualan product.

Kriteria function:
1.  Beri nama function tersebut getInfoPenjualan
2.  function ini harus return data dengan tipe object
3.  Data object harus berisi properti seperti yang dijelaskan sebelumnya yaitu totalKeuntungan, totalModal, produkBukuTerlaris, 
    persentaseKeuntungan, dan penulisTerlaris
4.  function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.
*/

// berikut ini adalah contoh object yang harus di return pada function yang akan kamu buat
// semua value pada properti object dibawah ini adalah contoh data saja,
// jadi itu bukan hasil perhitungan yang sebenarnya

// pada properti totalkeuntungan dan totalModal, nilai yang dihasilkan harus dalam
// berupa format rupiah, contoh totalKeuntungan 14650000 di jadikan format rupiah
// menjadi 'Rp. 14.650.000'
// {
//     totalKeuntungan: 'Rp. 10.000.000', Harus dalam format rupiah
//     totalModal: 'Rp. 6.000.000', Harus dalam format rupiah
//     persentaseKeuntungan: '60%', Persentasi keuntungan berdasarkan totalModal dan totalJual
//     produkBukuTerlaris: 'BUKU TERLARIS BERDASARKAN DATA DIATAS', namaProduk yang paling banyak dijual
//     penulisTerlaris: 'PENULIS TERLARIS BERDASARKAN DATA DIATAS' nama penulis yang bukunya paling banyak dijual
// }

const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

function getInfoPenjualan(dataPenjualanNovel) {
    //validasi tipe data
    if (!Array.isArray(dataPenjualanNovel)) {
        return "Error: Parameter tidak valid";
    }

    let totalKeuntungan = 0;
    let totalModal = 0;
    let produkBukuTerlaris = "";
    let penulisTerlaris = "";
    let maxTerjual = 0;

    dataPenjualanNovel.forEach((item) => {
        const { hargaJual, hargaBeli, totalTerjual, namaProduk, penulis, sisaStok } = item;

        const keuntungan = (hargaJual - hargaBeli) * totalTerjual;
        totalKeuntungan += keuntungan;
        totalModal += (totalTerjual + sisaStok) * hargaBeli;

        if (totalTerjual > maxTerjual) {
            maxTerjual = totalTerjual;
            produkBukuTerlaris = namaProduk;
            penulisTerlaris = penulis;
        } else if (totalTerjual === maxTerjual) {
            produkBukuTerlaris += `, ${namaProduk}`;
            penulisTerlaris += `, ${penulis}`;
        }
    });

    persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2) + "%";
    totalKeuntungan = `Rp.${totalKeuntungan.toLocaleString('id-ID')} `;
    totalModal = `Rp.${totalModal.toLocaleString('id-ID')} `;

    return {
        totalKeuntungan,
        totalModal,
        persentaseKeuntungan,
        produkBukuTerlaris,
        penulisTerlaris
    }
}

console.log(getInfoPenjualan(dataPenjualanNovel));