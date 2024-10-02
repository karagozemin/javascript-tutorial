let tarih = new Date();

let result;

//! Get Methots
result = tarih.getDate(); //! gün
result = tarih.getDay(); //! 0 = pazar, 6 = cumartesi
result = tarih.getFullYear(); //! yıl
result = tarih.getHours(); //! saat
result = tarih.getTime(); //! milisaniye


//! Tarihi Güncelleme Methotları - Set methods

// tarih.setFullYear(2025);
tarih.setMonth(2);
tarih.setDate(15);

result = tarih

//! Doğum Tarihi

let dogumTarihi = new Date(2000, 8, 15);
result = tarih.getFullYear() - dogumTarihi.getFullYear();

console.log(result);

