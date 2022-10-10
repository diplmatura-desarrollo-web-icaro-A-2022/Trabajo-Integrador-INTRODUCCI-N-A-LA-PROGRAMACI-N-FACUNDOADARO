"use strict"


const editar = (id, titulo, autor, genero, año, costo, precio) => {
    return {
        id: id,
        title: titulo,
        author: autor,
        genre: genero,
        year: año,
        cost: costo,
        price: precio,
    }
}

module.exports = {
    editar,
}