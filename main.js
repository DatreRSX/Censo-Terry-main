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
document.getElementById("textarea").value += tabla[sumador][0] +"                  "+ tabla[sumador][1]
+"                      "+ tabla[sumador][2]+"                             "+tabla[sumador][3]+"\n";
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
        document.getElementById("textarea").value += tabla[sumador1][0] +"                  "+ tabla[sumador1][1]
        +"                      "+ tabla[sumador1][2]+"                             "+tabla[sumador1][3]+"\n";
        }
    }
    
function f_limpiar(){
document.getElementById("textarea").value="";

}