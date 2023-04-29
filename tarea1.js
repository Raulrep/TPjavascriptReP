//Realizar una funcion que reciba un numero y escriba una piramide desde 
//1 hasta ese numero de la siguiente forma:
// para valor 6
console.log("Punto 1")

function piramide (seis){
    let fila = ""
    for (let i = 1; i <= seis; i++){
        for(c = 1; c <= i;c++){
            fila = fila + String(c);
        };
        console.log(fila)
        fila = ""
    };
};

let seis=6;
piramide(seis);

// para valor 3
console.log ("")

function piramide (tres){
    let fila = ""
    for (let i = 1; i <= tres; i++){
        for(c = 1; c <= i;c++){
            fila = fila + String(c);
        };
        console.log(fila)
        fila = ""
    };
};

let tres=3;
piramide(tres);

// -----------------------------------------------------------------------
// Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos 
// que coinciden entre ellos
//Ejemplo1:
console.log ("")
console.log("Punto 2")

function coinciden (array1, array2){
    return array2.filter( item => array1.includes(item));
}

let array1 = ['rojo', 'azul', 'amarillo']
let array2 = ['blanco', 'negro', 'rojo']

let response = coinciden(array1, array2);

console.log(response);

console.log ("")

//Ejemplo2:

function coinciden1 (arra1, arra2){
    return arra2.filter( item => arra1.includes(item));
}

let arra1 = [4, 3, true, 'manzana']
let arra2 = ['pera', 3, false, true, 3, true]

let respuesta = coinciden1(arra1, arra2);

var sinDuplicados = [... new Set (respuesta)];

console.log(sinDuplicados);
console.log ("")

//---------------------------------------------------------
//Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

console.log("Punto 3")

class Producto {
    nombre;
    unidades;
    precio;
    
    agregaraProducto(nombre,unidades,precio){

    }
}
let carito = {
    montoTotal: 10,
    productos: ["Leche"]
    }
    console.log(carito)

//gregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx" 
//puntos 3.2 y 3.3

console.log ("puntos 3.2 y 3.3")

class Carro{
    constructor(){
        this.montoTotal = 0;
        this.productos = [];
    }

    agregarProducto(nombre,precio,unidades){
    
        const productoInicial = 
this.productos.find(producto => producto.nombre === nombre);

    if (productoInicial){
        productoInicial.unidades += unidades;
        console.log(`El producto ${nombre} ya esta en el carrito con ${productoInicial.unidades} unidades`);
    }
    else{
        this.productos.push({nombre,precio,unidades});
        this.montoTotal += precio*unidades;
        }
    }
}

const carrito = new Carro();
carrito.agregarProducto("carne",2,5);
carrito.agregarProducto("vino",3,2);
carrito.agregarProducto("vino",3,4);
console.log(carrito)

