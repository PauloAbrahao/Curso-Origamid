const lista = [
    'Crédito',
    'R$ 400',
    'R$ 200',
    'Contas pagar',
    'R$ 300',
    'R$ 400',
    'Meus dados'
];

const listaFiltro = lista.filter((dado) => 
    //console.log(dado.includes('R$'))
    dado.includes('R$')
)

// O metodo 'map' gera um novo array, uma cópia do original
const listaNumeros = lista.map((d) => d.replace('R$', 'Valor:'))

console.log(listaFiltro)
console.log(listaNumeros)