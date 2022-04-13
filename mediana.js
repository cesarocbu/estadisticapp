function calcularMedia(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/*Funcion que ve si el numero que introducimos es par o impar
despues lo cambiaremos por la longitud del array en la funcion calculaMediana.*/


function esPar (numerito){
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}


/*Funcion que recibe una lista ded x elementos, definimos al inicio la mitad de la lista (que sera la mediana si la lista es impar), evalua si la longitud del array es par, si es par llama a la funcion calcularMedia y esta recibe como parametros el elemento 1 (que es la mitad de la lista menos 1) y el elemento 2 que es la mitad de la lista, para despues hacer el promedio de las dos e imprimir la mediana.
*/

function calculaMediana(lista){
    lista.sort(function(a, b){return a - b});
    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioPar = calcularMedia([elemento1, elemento2]);

        mediana = promedioPar;
        return mediana;

    } else{
        mediana = lista[mitadLista];
        return mediana;
    }

}

