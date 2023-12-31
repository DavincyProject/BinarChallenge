/*  
⚠️⚠️ entah ada yang sama atau tidak codingannya, tetapi code dibawah
murni dibuat dengan basic yang dipelajari di materi ⚠️⚠️
Buatlah sebuah function dengan nama changeWord yang berfungsi untuk menggantikan sebuah kata
didalam sebuah kalimat.
Function ini akan menerima 3 parameter, yaitu :
1. selectedText => Kata yang terdapat pada sebuah kalimat dan merupakan kata yang akan diganti nantinya.
2. changedText => Kata yang akan menjadi pengganti pada sebuah kalimat nantinya.
3. text => Sebuah kalimat yang akan diubah.
*/

function changeWord(selectedText, changedText, text) {
  return text.replaceAll(selectedText, changedText); //merubah replace menjadi replaceAll sesuai hasil pembahasan materi agar semua text yang diselect akan berubah semua
}

let kalimat1 = "Andini sangat mencintai kamu selamanya";
let kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "everest", kalimat2));
