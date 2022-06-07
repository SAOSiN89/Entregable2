
function EnCuotas (producto,cuotas){
    if (cuotas == 3) {
        num = producto / cuotas
        return num
    } else if (cuotas == 6) {
        num = producto / cuotas
        return num
    } else if (cuotas == 12){
        num = producto / cuotas
        return num
    } else if (cuotas == 18){
        num = producto / cuotas
        return num
    } else{
        return "No contamos con ese numero de cuotas, Ingrese un numero valido"
    } 
    
}

let produ = prompt("Ingrese el valor del producto o 'ESC' para salir")
while (produ != "ESC") {
    let NumCuotas = prompt("Ingrese el numero de cuotas (ej: 3, 6, 12, 18)")
    if(NumCuotas == 3 || NumCuotas == 6 || NumCuotas == 12 || NumCuotas == 18){
        alert("En "+ NumCuotas+ " Cuotas deberia pagar: $" + EnCuotas(produ,NumCuotas) + " por mes.")
        produ = prompt("Ingrese otro valor o la palabra 'ESC' para terminar") 
    }else{alert(EnCuotas(produ,NumCuotas))}      
}
