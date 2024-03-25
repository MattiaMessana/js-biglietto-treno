// alert("ciao");

// 1. BLOCCO DATI INPUT
// ETA'
let userAge = prompt("Ciao users, Quanti hanni hai?");
userAge = parseInt(userAge);
console.log(userAge, typeof userAge);


//KM PERCORSI 
let userKm = prompt("Quanti km farai?");
userKm = parseInt(userKm);
console.log(userKm, typeof userKm);

//2. ESECUZIONE LOGICA 
const ticketPrice = (userKm * 0.21 );
console.log(ticketPrice, typeof ticketPrice);

let finalPrice = 0;

if (userAge < 17) {
    scountUnderAge = (ticketPrice * 0.20);
    console.log(scountUnderAge, typeof scountUnderAge);
    finalPrice = (ticketPrice - scountUnderAge);
    console.log (finalPrice , typeof finalPrice);
}
if (userAge > 64 ) {
    scountSenior = (ticketPrice * 0.40);
    console.log(scountSenior, typeof scountSenior);
    finalPrice = (ticketPrice - scountSenior);
    console.log (finalPrice , typeof finalPrice);   
}
if (userAge > 18 && userAge < 64){
    finalPrice = (ticketPrice);
}

//3. STAMPO OUTPUT
const priceResult = ` Ho calcolato il prezzo del tuo biglietto ed è di : €${finalPrice.toFixed(2)}`;
console.log(priceResult, typeof priceResult);
document.getElementById("price").innerHTML = priceResult;





