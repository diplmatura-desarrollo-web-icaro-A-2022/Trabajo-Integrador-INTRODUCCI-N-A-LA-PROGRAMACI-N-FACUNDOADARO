const { read } = require("./read.js");
const { write } = require('./write.js');


function edit (direccion, id, newtitulo, newautor,newgenero,newaño,newcosto,newprecio) {
    const newArr = []
    var data = read(direccion)
    for (let i = 0; i < data.length; i++) {
        
        let element = data[i];
        const idTemp = data[i].id
                
        if (id == idTemp) {
            let num 
            num =id
            element = { id: num, title: newtitulo, author:newautor, genre: newgenero, year: newaño, cost:newcosto, price: newprecio }
            newArr.push(element)
        } else {
            newArr.push(element)
        }
    }
    return write(newArr,direccion)
}


module.exports = {edit}