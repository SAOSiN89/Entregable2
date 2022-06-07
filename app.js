// Funciones
function precioCuotas(valor, numCuotas){
    resultado = valor / numCuotas
    return resultado
}

function continuar(){
    let continua = +prompt("Desea consultar otro producto ? 1- SI / 2-NO")
    if(continua == 2){
        contador++
        alert("Hasta luego");
    }
    else{
        alert("Espere un segundo que lo llevamos al inicio");
    }
}


let contador = 0
do{
let producto = +prompt("Ingrese el valor en $ de su producto")
let cuotas =  +prompt("Ingrese el numero de cuotas. (Ej: 3,6,9,12)")
switch (cuotas) {
    case 3:
        alert(`En ${cuotas} cuotas deberia pagar: $ ${precioCuotas(producto, cuotas)} por mes`)
        continuar()
        break;
    case 6:
        alert(`En ${cuotas} cuotas deberia pagar: $ ${precioCuotas(producto, cuotas)} por mes`)
        continuar()
        break;
    case 9:
        alert(`En ${cuotas} cuotas deberia pagar: $ ${precioCuotas(producto, cuotas)} por mes`)
        continuar()
        break;
    case 12:
        alert(`En ${cuotas} cuotas deberia pagar: $ ${precioCuotas(producto, cuotas)} por mes`)
        continuar()
        break;    
    default:
        alert("Ingreso un numero de cuotas incorrecto")
        break;
}
}
while(contador != 1)
