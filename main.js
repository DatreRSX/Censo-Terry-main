const tabla = new Array (10);

tabla[0] = ["Madrid","06233627A","Jaime","17"] ;
tabla[1] = ["Barcelona", "07458362D", "Carlos", "30"] ;
tabla[2] = ["Sevilla", "05289734B", "Ana", "25"];
tabla[3] = ["Valencia", "03984723C", "Luis", "21"];
tabla[4] = ["Barcelona", "07458362D", "Antonio", "30"];
tabla[5] = ["Cadiz", "01827365E", "Maria", "22"];
tabla[6] = ["Madrid", "06233627X", "Tomas", "17"];
tabla[7] = ["Madrid", "05289734B", "Andres", "25"]; 
tabla[8] = ["Valencia", "03984723A", "Jorge", "21"];
tabla[9] = ["Cadiz", "01827365X", "Gabbo", "22"];

function f_buscar() {
    f_limpiar()
    var ciudad = document.getElementById("ciudades").value;
    var sumador = 0;

while (sumador < tabla.length) {

if (tabla[sumador][0] == ciudad) {
    document.getElementById("pciudad").innerHTML += tabla[sumador][0]+"<br>";
    document.getElementById("pdni").innerHTML+=tabla[sumador][1]+"<br>";
    document.getElementById("pnombre").innerHTML +=tabla[sumador][2]+"<br>";
    document.getElementById("pedad").innerHTML +=tabla[sumador][3]+"<br>";
}

sumador++;
}


}

function f_buscarDNI() {
    f_limpiar();
    var dni = document.getElementById("Dni").value;
    var sumador1 = 0;
    while (tabla[sumador1][1] != dni && sumador1 < tabla.length) {
    sumador1++;
    }
    
    if (tabla[sumador1][1] == dni) {
        document.getElementById("pciudad").innerHTML += tabla[sumador1][0]+"<br>";
        document.getElementById("pdni").innerHTML+=tabla[sumador1][1]+"<br>";
        document.getElementById("pnombre").innerHTML +=tabla[sumador1][2]+"<br>";
        document.getElementById("pedad").innerHTML +=tabla[sumador1][3]+"<br>";
    }
}
function f_limpiar(){
document.getElementById("pciudad").innerHTML ="";
document.getElementById("pdni").innerHTML="";
document.getElementById("pnombre").innerHTML="";
document.getElementById("pedad").innerHTML="";
}