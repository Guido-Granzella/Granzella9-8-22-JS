alert ("Bienvenidos al nuevo bar NoEatLikeAnts")
alert ("Toque F12 en su teclado para abrir la consola")

cliente ()

    function cliente () {
        let nombre = prompt ("Ingrese su nombre");
        while (nombre === "" || nombre === null) {
        nombre = prompt ("Ingrese su nombre");
        }
        let mesa = prompt ("Ingrese su N° de mesa");
        while (mesa === "" || mesa === null) {
        mesa = prompt ("Ingrese su N° de mesa");
        }
    console.log ("Bienvenido " + nombre + " Mesa N° "+ mesa);
    }

console.warn ("Le presentamos para elegir bebida, comida, postre y salsa")



function creoID() {
    return parseInt(Math.random() * 100000)
}

const bebida = ["CocaCola", "Agua", "Sprite", "Stella", "Quilmes", "VinoToro", "AlmaMora", "AguaSaborizada"]
const bebidas = []

function listarBebida() {
    for (let bebida of bebidas) {
        console.table(bebida)
    }
}
class Bebida {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function agregarBebidas() {
    let id = creoID();
    let descripcion = prompt("Ingresa el nombre de la bebida:");
    let importe = parseInt(prompt("Ingresa el importe:"));
    bebidas.push(new Bebida(id, descripcion, importe));
    console.table(bebidas);
}

function generadorAutomaticoBebida() {
    bebidas.push(new Bebida(1234, "CocaCola", 250))
    bebidas.push(new Bebida(2345, "Agua", 200))
    bebidas.push(new Bebida(3456, "Sprite", 250))
    bebidas.push(new Bebida(4567, "Stella", 500))
    bebidas.push(new Bebida(5678, "Quilmes", 400))
    bebidas.push(new Bebida(6789, "VinoToro", 350))
    bebidas.push(new Bebida(7890, "AlmaMora", 600))
    bebidas.push(new Bebida(8901, "AguaSaborizada", 200))
    console.table(bebidas)
}


const comida = ["Milanesa", "HamburguesaSimple", "HamburguesaCompleta", "SangucheLomito", "RaviolesRicota", "Ñoquis", "Spaguetti", "PastasCaserasCalabaza"];
const comidas = []

function listarComida() {
    for (let comida of comidas) {
        console.table(comida)
    }
}
class Comida {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}
function generadorAutomaticoComida() {
    comidas.push(new Comida(1234, "Milanesa", 1000))
    comidas.push(new Comida(2345, "HamburguesaSimple", 800))
    comidas.push(new Comida(3456, "HamburguesaCompleta", 1000))
    comidas.push(new Comida(4567, "SangucheLomito", 1200))
    comidas.push(new Comida(5678, "RaviolesRicota", 800))
    comidas.push(new Comida(6789, "Ñoquis", 700))
    comidas.push(new Comida(7890, "Sapguetti", 750))
    comidas.push(new Comida(8901, "PastaCaseraCalabaza", 850))
    console.table(comidas)
}
function agregarComidas() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre de la comida:")
    let importe = parseInt(prompt("Ingresa el importe:"))
    comidas.push(new Comida(id, descripcion, importe))
    console.table(comidas)
}



const postre = ["Helado", "VolcanChocolate", "FondeuQuesos", "Flan", "FlanMixto", "BudinPan", "Almendrado", "SinPostre"]
const postres =[]

function listarPostre() {
    for (let postre of postres) {
        console.table(postre)
    }
}

class Postre {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}
function agregarPostres() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del postre:")
    let importe = parseInt(prompt("Ingresa el importe:"))
    postres.push(new Postre(id, descripcion, importe))
    console.table(postres)
}

function generadorAutomaticoPostre() {
    postres.push(new Postre(1234, "Helado", 400))
    postres.push(new Postre(2345, "VolvanChocolate", 500))
    postres.push(new Postre(3456, "FondeuQuesos", 600))
    postres.push(new Postre(4567, "Flan", 450))
    postres.push(new Postre(5678, "FlanMixto", 550))
    postres.push(new Postre(6789, "BudinPan", 400))
    postres.push(new Postre(7890, "Almendrado", 450))
    postres.push(new Postre(8901, "SinPostre", 0))
    console.table(postres)
}

const salsa = ["Bolognesa", "Portuguesa", "Fileto", "Blanca", "Mixta", "Champignones", "Moluscos", "SinSalsa"]
const salsas =[]

function listarSalsa() {
    for (let salsa of salsas) {
        console.table(salsa)
    }
}
class Salsa {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}
function generadorAutomaticoSalsa() {
    salsas.push(new Salsa(1234, "Bolognesa", 500))
    salsas.push(new Salsa(2345, "Portuguesa", 400))
    salsas.push(new Salsa(3456, "Fileto", 300))
    salsas.push(new Salsa(4567, "Blanca", 300))
    salsas.push(new Salsa(5678, "Mixta", 400))
    salsas.push(new Salsa(6789, "Champignones", 550))
    salsas.push(new Salsa(7890, "Moluscos", 600))
    salsas.push(new Salsa(8901, "SinSalsa", 0))
    console.table(salsas)
}

function agregarSalsas() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre de la salsa:")
    let importe = parseInt(prompt("Ingresa el importe:"))
    salsas.push(new Salsa(id, descripcion, importe))
    console.table(salsas)
}




console.log(bebida)
console.log(comida)
console.log(postre)
console.log(salsa)
generadorAutomaticoBebida()
generadorAutomaticoComida()
generadorAutomaticoPostre()
generadorAutomaticoSalsa()
