let meyve = ["elma", "armut", "muz", "portakal", "karpuz"];

// console.log(meyve[0]);
// console.log(meyve[1]);
// console.log(meyve[2]);
// console.log(meyve[3]);
// console.log(meyve[4]);


// for(let i = 0; i < meyve.length; i++){
//     console.log(i);
// }


// //! SAYI TOPLAMA

// let sayilar = [10, 20, 5, 50, 100, 200];
// console.log(sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5]);

// let toplam = 0;
// for (let i = 0; i < sayilar.length; i++) {
//     console.log(toplam = toplam + sayilar[i]);

// }

//! Kısayol İndex
// let sayilar = [10, 20, 5, 50, 100, 200];
// let toplam = 0;

// for (let i in sayilar) {
//     console.log(toplam += sayilar[i]);
// }


//! Direkt Sayılar Alma

// let sayilar = [10, 20, 5, 50, 100, 200];
// let toplam = 0;
// for(let sayi of sayilar){

//     console.log(toplam += sayi);

// }

//! object ile döngü
// const user = {
//     "ad": "emin",
//     "soyad": "karagöz",
//     "mail": "eminkaragoz07@gmail.com",
//     "yas": 17
// }

// for (let key in user) 


//! Çoklu Kullanıcı
let users = [
    {
        "ad": "emin",
        "soyad": "karagöz",
        "mail": "eminkaragoz07@gmail.com",
        "yas": 17

    },
    {

        "ad": "caner",
        "soyad": "yakuoğlu",
        "mail": "yakupoglu@gmail.com",
        "yas": 25
    },
    {
        "ad": "selim",
        "soyad": "kafa",
        "mail": "kafagoz07@gmail.com",
        "yas": 22

    },

]

// console.log(users[0].ad);
// console.log(users[1]ad);
// console.log(users[2].ad);


for (let i = 0; i < users.length; i++) {

    console.log(users[i].ad);

}




//! caner abimle denemeler
// console.log(sayilar[6])

// console.log(sayilar.length)

// for (let i = 0; i < sayilar.length; i++) {
//     const element = sayilar[i];

//     console.log("index:", i, "value:", element)
// }

// for (const key in sayilar) {
//     const element = sayilar[key];
//     console.log(key, element)
// }

// for (const element of sayilar) {
//     console.log(element)
// }
