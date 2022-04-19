/*
Algoritmo que saca el promedio de alturas en cm
Leer la altura de N personas y determinar el promedio de
estaturas en general.
*/
let suma = 0
let altura
let contador= 0
let seguir = true

while (seguir) {
    do{
        altura = parseInt(prompt("Ingrese la altura en cm. Ingrese 0 si quiere dejar de ingresar valores."))
        console.log(altura)
    } while(isNaN(altura))
    if (altura == 0){
        console.log("Se ha ingresado 0.")
        seguir = false;
        break
    }
    suma= suma + altura 
    contador= contador + 1
}
let promedio = suma/contador
console.log("El promedio de alturas es de", promedio)