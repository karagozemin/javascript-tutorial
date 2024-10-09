// let sayi1 = 10;
// let sayi2 = 20;
// let toplam = sayi1 + sayi2;
// let sayi3 = 20;
// let sayi4 = 30;
// let toplam2 = sayi3 + sayi4;


// console.log(toplam2);
//! Basit Toplama Fonksiyonu
// function sayiToplami(sayi1, sayi2){
//     let toplam = sayi1 + sayi2;
//     console.log(toplam);

// }


// sayiToplami(10, 20)
// sayiToplami(20, 30)


//! Gelişmiş Toplama Fonksiyonu

let toplam = -280;

function sayiToplami(...sayilar) {

    for (let sayi of sayilar) {
        toplam += sayi;

        // console.log(sayi);

    }

}

sayiToplami(10, 20, 30, 40, 50, 60, 70,80);
console.log(toplam);



