class calculadora{
    constructor(){

    }

    suma(num1,num2){
        var result = parseInt(num1) + parseInt(num2);
        return alert(result);
    }
    resta(num1,num2){
        var result = parseInt(num1) - parseInt(num2);
        return alert(result);
    }
    division(num1,num2){
        var result = parseInt(num1) / parseInt(num2);
        return alert(result);
    }
    multiplicar(num1,num2){
        var result = parseInt(num1) * parseInt(num2);
        return alert(result);
    }
    raizCuad(num){
     let m =  Math.sqrt(num);
     return alert(m);
    }
    potencia(bas,expo){
       var base = bas;
       for(let i = 2; i <= expo; i++){
           base = base * bas;
       }
       return alert(base);
    }

}
   
const calc = new calculadora;
const op = prompt("Que quieres hacer? 1.suma 2.resta 3.division 4.multiplicacion 5.raicez cuadradas 6.potencias")

if(op == 1){
calc.suma(prompt("Escribre un numero"), prompt("Escribe el segundo"))
}else if(op == 2){
    calc.resta(prompt("Escribre un numero"), prompt("Escribe el segundo"));
}else if(op == 3){
    calc.division(prompt("Escribre un numero"), prompt("Escribe el segundo"));
}else if(op == 4){
    calc.multiplicar(prompt("Escribre un numero"), prompt("Escribe el segundo"));
}else if(op == 5){
    calc.raizCuad(prompt("Escribre un numero"));
}else if(op == 6){
    calc.potencia(prompt("Escribre un numero"), prompt("Escribe el segundo"));
}