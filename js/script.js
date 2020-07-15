// INSERT PAROLA
var parolaUtente = prompt('inserisci una parola');

// CONTROLLI INPUT
var numeri = RegExp('[0-9]' );
var carSpec = /^[!@#$%^&*()+=,./{}|:<>?]^/;

while((numeri.test(parolaUtente) == true) || (carSpec.test(parolaUtente) == true) || parolaUtente == ''){
   alert('parola non valida');
   parolaUtente = prompt('inserisci una parola');
}


document.getElementById('parola').innerHTML = parolaUtente;
document.getElementById('palindroma').innerHTML = (palindroma(parolaUtente));

// FUNZIONE PALINDROMA

function palindroma(parola) {
    var parolaContrario = '';
    for (var i = parola.length - 1; i >= 0; i--) {
        parolaContrario += parola[i];
    }

    if (parolaContrario == parola) {
        return "E' una parola palindroma";
    }  else {
        return "Non è una parola palindroma";
    }
}

// funzione con funzioni

// function palindromauno(parola) {
//     var reverseString = parolaUtente.split('').reverse().join('');
//     if (reverseString == parolaUtente) {
//         return "E' una parola palindroma";
//     }  else {
//         return "Non è una parola palindroma";
//     }
// }
