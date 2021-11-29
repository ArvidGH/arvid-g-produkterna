//Shoppingcarten på product.html

//Dropdown funktionen
function dropdown() {
    document.getElementById("cartdropdown").classList.toggle("show");
}

//Ta bort varor i varukorgen
function remove1() {
    document.getElementById("cartitemproduct1").innerHTML = document.getElementById("cartitemproduct2").innerHTML;
    document.getElementById("cartitemprice1").innerHTML = document.getElementById("cartitemprice2").innerHTML;
    document.getElementById("cartitemproduct2").innerHTML = "Varukorg";
    document.getElementById("cartitemprice2").innerHTML = "Kr";
}
function remove2() {
    document.getElementById("cartitemproduct2").innerHTML = "Varukorg";
    document.getElementById("cartitemprice2").innerHTML = "Kr";
}

//Varje produkt
function adidaspadelrack() {
    if (document.getElementById("cartitemprice1").innerHTML === "Kr") {
        document.getElementById("cartitemproduct1").innerHTML = document.getElementById("adidaspadelrack").innerHTML;
        document.getElementById("cartitemprice1").innerHTML = document.getElementById("adidaspadelrackprice").innerHTML;
    } else if (document.getElementById("cartitemprice2").innerHTML === "Kr") {
        document.getElementById("cartitemproduct2").innerHTML = document.getElementById("adidaspadelrack").innerHTML;
        document.getElementById("cartitemprice2").innerHTML = document.getElementById("adidaspadelrackprice").innerHTML;
    } else {
        alert("Kundvagnen är full!");
    }
}

function babolatpadelrack() {
    if (document.getElementById("cartitemprice1").innerHTML === "Kr") {
        document.getElementById("cartitemproduct1").innerHTML = document.getElementById("babolatpadelrack").innerHTML;
        document.getElementById("cartitemprice1").innerHTML = document.getElementById("babolatpadelrackprice").innerHTML;
    } else if (document.getElementById("cartitemprice2").innerHTML === "Kr") {
        document.getElementById("cartitemproduct2").innerHTML = document.getElementById("babolatpadelrack").innerHTML;
        document.getElementById("cartitemprice2").innerHTML = document.getElementById("babolatpadelrackprice").innerHTML;
    } else {
        alert("Kundvagnen är full!");
    }
}

function bullpadelpadelrack() {
    if (document.getElementById("cartitemprice1").innerHTML === "Kr") {
        document.getElementById("cartitemproduct1").innerHTML = document.getElementById("bullpadelpadelrack").innerHTML;
        document.getElementById("cartitemprice1").innerHTML = document.getElementById("bullpadelpadelrackprice").innerHTML;
    } else if (document.getElementById("cartitemprice2").innerHTML === "Kr") {
        document.getElementById("cartitemproduct2").innerHTML = document.getElementById("bullpadelpadelrack").innerHTML;
        document.getElementById("cartitemprice2").innerHTML = document.getElementById("bullpadelpadelrackprice").innerHTML;
    } else {
        alert("Kundvagnen är full!");
    }
}

function dunloppadelrack() {
    if (document.getElementById("cartitemprice1").innerHTML === "Kr") {
        document.getElementById("cartitemproduct1").innerHTML = document.getElementById("dunloppadelrack").innerHTML;
        document.getElementById("cartitemprice1").innerHTML = document.getElementById("dunloppadelrackprice").innerHTML;
    } else if (document.getElementById("cartitemprice2").innerHTML === "Kr") {
        document.getElementById("cartitemproduct2").innerHTML = document.getElementById("dunloppadelrack").innerHTML;
        document.getElementById("cartitemprice2").innerHTML = document.getElementById("dunloppadelrackprice").innerHTML;
    } else {
        alert("Kundvagnen är full!");
    }
}

function headpadelrack() {
    if (document.getElementById("cartitemprice1").innerHTML === "Kr") {
        document.getElementById("cartitemproduct1").innerHTML = document.getElementById("headpadelrack").innerHTML;
        document.getElementById("cartitemprice1").innerHTML = document.getElementById("headpadelrackprice").innerHTML;
    } else if (document.getElementById("cartitemprice2").innerHTML === "Kr") {
        document.getElementById("cartitemproduct2").innerHTML = document.getElementById("headpadelrack").innerHTML;
        document.getElementById("cartitemprice2").innerHTML = document.getElementById("headpadelrackprice").innerHTML;
    } else {
        alert("Kundvagnen är full!");
    }
}

function noxpadelrack() {
    if (document.getElementById("cartitemprice1").innerHTML === "Kr") {
        document.getElementById("cartitemproduct1").innerHTML = document.getElementById("noxpadelrack").innerHTML;
        document.getElementById("cartitemprice1").innerHTML = document.getElementById("noxpadelrackprice").innerHTML;
    } else if (document.getElementById("cartitemprice2").innerHTML === "Kr") {
        document.getElementById("cartitemproduct2").innerHTML = document.getElementById("noxpadelrack").innerHTML;
        document.getElementById("cartitemprice2").innerHTML = document.getElementById("noxpadelrackprice").innerHTML;
    } else {
        alert("Kundvagnen är full!");
    }
}

function princepadelrack() {
    if (document.getElementById("cartitemprice1").innerHTML === "Kr") {
        document.getElementById("cartitemproduct1").innerHTML = document.getElementById("princepadelrack").innerHTML;
        document.getElementById("cartitemprice1").innerHTML = document.getElementById("princepadelrackprice").innerHTML;
    } else if (document.getElementById("cartitemprice2").innerHTML === "Kr") {
        document.getElementById("cartitemproduct2").innerHTML = document.getElementById("princepadelrack").innerHTML;
        document.getElementById("cartitemprice2").innerHTML = document.getElementById("princepadelrackprice").innerHTML;
    } else {
        alert("Kundvagnen är full!");
    }
}

function viborapadelrack() {
    if (document.getElementById("cartitemprice1").innerHTML === "Kr") {
        document.getElementById("cartitemproduct1").innerHTML = document.getElementById("viborapadelrack").innerHTML;
        document.getElementById("cartitemprice1").innerHTML = document.getElementById("viborapadelrackprice").innerHTML;
    } else if (document.getElementById("cartitemprice2").innerHTML === "Kr") {
        document.getElementById("cartitemproduct2").innerHTML = document.getElementById("viborapadelrack").innerHTML;
        document.getElementById("cartitemprice2").innerHTML = document.getElementById("viborapadelrackprice").innerHTML;
    } else {
        alert("Kundvagnen är full!");
    }
}

function wilsonpadelrack() {
    if (document.getElementById("cartitemprice1").innerHTML === "Kr") {
        document.getElementById("cartitemproduct1").innerHTML = document.getElementById("wilsonpadelrack").innerHTML;
        document.getElementById("cartitemprice1").innerHTML = document.getElementById("wilsonpadelrackprice").innerHTML;
    } else if (document.getElementById("cartitemprice2").innerHTML === "Kr") {
        document.getElementById("cartitemproduct2").innerHTML = document.getElementById("wilsonpadelrack").innerHTML;
        document.getElementById("cartitemprice2").innerHTML = document.getElementById("wilsonpadelrackprice").innerHTML;
    } else {
        alert("Kundvagnen är full!");
    }
}
