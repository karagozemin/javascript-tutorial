let products = ["iphone5", "samsung", "huawei"];
let result;

result = products.length;

//! array to string
// result = products.toString(); // stringe cevir
// result = products.join("/") // ayırma


//! diziden eleman silme

// result = products.shift();    // ilk elemanı siler geri döndürür.
// result = products.pop();      // son elemanı silr geri döndürür.

//! diziye eleman eklemek

// result = products.push("xiaomi")     // dizi sonuna eleman ekler.
// result = products.unshift("xiaomi"); // dizi başına eleman ekler

//! dizi birleştirme

let urunler1 = ["asus", "apple"];
let urunler2 = ["dell", "casper"];
let urunler3 = ["acer", "exper"];

// result = urunler1.concat(urunler2,urunler3) // ürünleri birleştirme de kullanılır => .concat
// result = urunler1.splice(0, 0, "elma");     // elma yı ekler
// result = urunler1.splice(0, 0, urunler2);   // urunler 2 yi ekler

result = urunler1.splice(0, 2)



console.log(result);
console.log(urunler1);