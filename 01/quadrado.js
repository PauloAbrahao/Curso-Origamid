// export const areaQuadrado = (l) => { return l * l }

// const perimetroQuadrado = (l) => { return 4 * l }

const areaQuadrado = (l) => { return l * l }

const perimetroQuadrado = (l) => { return 4 * l }

const quadrado = {
    areaQuadrado,
    perimetroQuadrado,
}

export default quadrado; // Quando sao passadas as funções em um objeto, como métodos, não é necessário
                         // exportar cada uma das funções acima