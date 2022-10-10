const {read} = require ("./read.js")
const {write} = require ("./write.js")
const {editar} = require ("./editar.js")

function create (file,id, title, author, genre,year,cost,price){
    const objeto = editar (id, title,  author, genre,year,cost,price)

    var data = read(file)

    data.push(objeto)

 return write(data, file)
}

module.exports ={create}