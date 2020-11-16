//Un callback es una funcion a la que se le pasa como argumento otra funcion

function procesarUsuario(callback){
    //1. muestra un console.log
    console.log('1');
    let nombre = "Andy";

    callback(nombre);
    console.log("4");
};

function saludo(cosa){
    console.log("2");

    console.log("Holaaaaa" + cosa);

    console.log("3");
};

procesarUsuario(saludo);

function padre(callback){
    console.log("primera linea");
    console.log("despues de esta linea se ejecuta el callback");
    callback();
    console.log("despues del callback pasa a esta siguiente linea donde" +
    + " termina el código");
};

function hijo(){
    console.log("esta función se ejecuta cuando se llama al callback");
};

padre(hijo);