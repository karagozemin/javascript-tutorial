// let customers = ["emin", ["asus", "monster", "dell", [10, 20, 30]]]

// console.log(`ürün: ${customer1[1][0]} fiyatı: ${customer1[1][3][0]}`);

let customer1 = {
    "ad": "Emin",
    "soyad": "Karagöz",
    "sehir": "İzmir",
    "yas": 17,
    "products": [
        "laptop", "car", "phone"
    ]
};

let customer2 = {
    "ad": "caner",
    "soyad": "Yakupoğlu",
    "sehir": "İzmir",
    "yas": 58,
    "products":
    {
        "phone": "iphone6",
        "price": 10,
    }
};


let customer3 = {
    "ad": "Selim",
    "soyad": "Kafa",
    "sehir": "İstanbul",
    "yas": 24,
};

let musteriler = [
    customer1,
    customer2,
    customer3,
]


let urunler = [
    {
        "id": 1,
        "urunAdi": "huawei",
        "fiyatı": 10
    },
    {
        "id": 2,
        "urunAdi": "apple",
        "fiyatı": 20
    },
    {
        "id": 3,
        "urunAdi": "vestel",
        "fiyatı": 30
    },
]

console.log(urunler);