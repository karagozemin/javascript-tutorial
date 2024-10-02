const ad = "emin";
const soyad = "karagöz";
const yas = 17;
const sehir = "izmir";
const meslek = "kaptan";
//!uzun yol
const bio = "benim adım " + ad + "," + "soyadım " + soyad + "." + sehir + "'de yasıyorum " + yas + " yasındayım.";
//! backtik (kolay yol)
const newBio = `benim adım ${ad},soyadım ${soyad}. ${sehir}'de yasıyorum ${yas} yasındayım. ${meslek} olarak çalışuyorum`;
console.log(newBio);
