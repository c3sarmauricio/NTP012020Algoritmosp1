let limite = 10;
let valor = [0,1];

for(i=2; i <= limite; i++){
    valor.push(valor[i-1] + valor[i-2]);
    document.write(valor[i]+"<br/>");    
}