let resp = 0;
let cant = 0;
let menor = 0;
let igual = 0;
let mayor = 0;

resp = "sí";

while ( resp == "sí"){
    cant = prompt("Por favor Ingrese una Cantidad:");
    if(cant < 0){
        menor = menor + 1;
    }else{
        if(cant == 0){
            igual = igual + 1;
        }else{
            mayor = mayor + 1;
        }
    }
    resp = prompt("Desea Ingresar otra valor?");
}
alert("Se ingresaron " + menor + " número menores a 0; " + igual + " números iguales a 0 y " + mayor + " números mayores a 0. A la orden.");
