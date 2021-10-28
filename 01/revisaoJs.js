//import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";
import quadrado from "./quadrado.js";
import numeroAleatorio from "./numeroAleatorio.js";

const menu = {
    seletor: '.principal',
}

console.log(menu.seletor)

function upperName(name) {
    return name.toUpperCase()
}


// ARROW FUNCTION
const lowerName = (name) => name.toLowerCase();

console.log(upperName('paulo'))
console.log(lowerName('paulo'))


// DESTRUCTURING 01
const handleMouse = (event) => {
    const { clientX, clientY } = event 
    console.log(clientX, clientY)
}

document.addEventListener('click', handleMouse);

// DESTRUCTURING 02
const handleMouse2 = ({ clientX, clientY }) => {
    console.log(clientX, clientY)
}

document.addEventListener('click', handleMouse2);

// DESTRUCTURING EM ARRAYS

const frutas = ['banana', 'uva']
const [ fruta01, fruta02 ] = frutas

console.log(fruta01, fruta02)


// FUNCIONAMENTO DOS HOOKS REACT

const useQuadrado = [4, function (lado) {
    return 4 * lado;
}]

// DESTRUCTURING
const [lados, perimetro] = useQuadrado

console.log(lados)
console.log(perimetro(10))


// REST: FORMA 01

function showList (empresa, clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa)
    })
}

showList('Google', ['Caio', 'Henrique'])

// REST: FORMA 02
// '...' = spread

function showList2 (empresa, ...clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa)
    })
}

showList2('Google', 'Andre', 'Paulo', 'Jao', 'Marcelo')

// REST: FORMA 03
// '...' = spread

const numeros = [10, 5, 20]
const maior = Math.max(...numeros)
console.log(maior)

const numeros2 = [80, 94, ...numeros, 24, 50, 70]
console.log(numeros2)

const carro = {
    cor: 'Azul',
    portas: 4,
}

carro.ano = 2002 // inserir dessa forma modifica o objeto original

let carroNovo = { ...carro, ano:2020 } // inserir dessa forma NAO modifica o objeto original

console.log(carro)
console.log(carroNovo)

console.log(quadrado.areaQuadrado(5))
console.log(quadrado.perimetroQuadrado(5))

console.log(numeroAleatorio())
