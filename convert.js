var fortunes = [
    "It is better to fail in originality than to succeed in imitation.",
    "The road to success and the road to failure are almost exactly the same.",
    "Success usually comes to those who are too busy to be looking for it."
]


function newFortune() {
   var random = Math.floor(Math.random() * (fortunes.length))
   document.getElementById('fortuneShow').innerHTML = fortunes[random]
}


//////////////////////////////////////////////////////////////////////////


var bdt, rup, usd, eur,dnr;

function findFields() {
   bdt = document.getElementById("BDT");
   rup = document.getElementById("RUP");
   usd = document.getElementById("USD");
   eur = document.getElementById("EUR");
   dnr = document.getElementById("DNR");

}

function convertbdt() {
   usd.value = parseFloat(bdt.value) * 0.012;
   eur.value = parseFloat(bdt.value) * 0.011;
   rup.value = parseFloat(bdt.value) * 0.87;
   dnr.value = parseFloat(bdt.value) * 0.0035;
}

function convertrup() {
   usd.value = parseFloat(rup.value) * 0.013;
   eur.value = parseFloat(rup.value) * 0.011;
   bdt.value = parseFloat(rup.value) * 1.14;
   dnr.value = parseFloat(rup.value) * 0.0040;
}

function converteur() {
   rup.value = parseFloat(eur.value) * 88.20;
   usd.value = parseFloat(eur.value) * 1.19;
   bdt.value = parseFloat(eur.value) * 100.87;
   dnr.value = parseFloat(eur.value) * 0.36;
}

function convertusd() {
   rup.value = parseFloat(usd.value) * 74.28;
   eur.value = parseFloat(usd.value) * 0.84;
   bdt.value = parseFloat(usd.value) * 84.94;
   dnr.value = parseFloat(usd.value) * 0.30;
}

function convertdnr() {
   rup.value = parseFloat(dnr.value) * 247.23;
   eur.value = parseFloat(dnr.value) * 2.80;
   bdt.value = parseFloat(dnr.value) * 282.78;
   usd.value = parseFloat(dnr.value) * 3.33;
}