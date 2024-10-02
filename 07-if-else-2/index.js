let yas = 17;
let mezuniyet = "üniversite";

if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) {
    console.log("ehliyet şartlarını karsıldaıgın için okeysin");
}
else if (yas === 17) {
    console.log("dayan son 1 sene");
}
else {
    console.log("karsılamadığın için olmaz");
}