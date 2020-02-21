let cantidades=[];
let suma = 0;
let numCantidades = 0;

while(numCantidades < 10)
{
    cantidades[numCantidades] = parseInt(prompt("Ingrese la cantidad: " + (numCantidades + 1)));
    numCantidades++;
    if(numCantidades == 10)
    {
        for (let i = 0; i < cantidades.length; i++) 
        {
            suma = suma + cantidades[i];
            
        }
        alert("la suma total de las cantidades es: " + suma);
    }
}