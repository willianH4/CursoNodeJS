//Ejemplo de modulos

function sumar( a, b ){
    return a + b;
}

function dividir( a , b ){
    return a / b;
}

//exportando la funcion o modulo para ser
//usado en otro archivo, exportando varias funciones

//Primera forma module.exports = { sumar, dividir };
//segunda forma ppener todas las funciones dentro de un objeto
//y exportar todo el objeto
//module.exports = obj;
// forma de exportar como en React esto es lo recomendado
exports = sumar;