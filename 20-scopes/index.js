//! Fonksiyonlar kendi scope alanlarını oluşturur.
//! var ile if block içerisinde scope oluşturmaz.
//! let ve const ile block işi scope oluşumu sağlayabilinir. 


let kullanici = "global scope: Emin";


function isimYazdir() {
    var kullanici = "function scope: Nur";
    console.log(kullanici);
}


if (true) {
    let kullanici = "if scope: yasin";
    console.log(kullanici);

}

console.log(kullanici);
isimYazdir();
