let url = "https://www.kaptaneth.com";
let youtube = "kaptan eth";
let result;

//! 1- karakter sayısı bul.
result = url.length;
result = youtube.length
result = youtube.replace(" ", "");

/* console.log(result) */


//! 2- Youtube değişkeni kaç karakterden oluşuyor

result = youtube.split(" ").length;
result = url.split(".")
/*console.log(result);*/

//! 3-  kanal adı başlangıç kontrol
result = youtube.startsWith("kaptan")
result = url.startsWith("https")
if (result) {
    /* console.log("yapılacaklar.");*/
} else {
    /* console.log("false döndü");*/

}

/*console.log(result);*/

//! 4- Kelime Kontrolü

if (youtube.indexOf("eth") > -1) {

    /*console.log("çalıştı");*/

} else {

    /*console.log("çalışmadı");*/

}


//! 5-URL ve Youtube değişken birleştir

youtube = youtube.toLowerCase().replace(" ", "-");

/*url = url.replace("com","com/");*/

let newURL = url.replace(url, url + youtube);
newURL = `${url}  ${youtube}`
console.log(newURL);
