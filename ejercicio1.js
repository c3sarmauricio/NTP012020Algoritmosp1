let continuar = "si";
let promedioEdad = 0;
let cantAlumnos = 0;
let reiniciar = "no";
let edades=[];

while(continuar == "si")
{
    edades[cantAlumnos] = parseInt(prompt("Bienvenid@ Estudiante " + (cantAlumnos + 1) + ", Cual es tu edad?"));
    if(edades[cantAlumnos] > 17)
    {
        promedioEdad = (edades.reduce((previus, current) => current += previus) / edades.length);
        alert("El promedio de edad de los estudiantes encuestados hasta ahora es de: " + promedioEdad);
    }
    cantAlumnos++;
    continuar = prompt("Deseas continuar encuestando?");
    if(continuar == "no")
    {
        reiniciar = prompt("Deseas reiniciar la encuesta?");
        if(reiniciar == "si")
        {
            edades = [];
            cantAlumnos = 0;
            continuar = "si";
        }
    }
}