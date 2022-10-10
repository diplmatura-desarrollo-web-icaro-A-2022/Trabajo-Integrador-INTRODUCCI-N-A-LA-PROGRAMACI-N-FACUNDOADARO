"use strict"


const fs = require('fs')
const {read} = require ("./read.js")
const { write } = require('./write.js');

function borrar (file, id){
    
    const newArr = []
    var data = read(file)
   

    for (let i = 0; i < data.length; i++) {
        
        const element = data[i];
        const idTemp = data[i].id
      
        if (id !== idTemp){
            newArr.push(element)
        }
        
    } return write(newArr,file)
}

module.exports = {borrar}