"use strict"

const fs = require('fs')


function read (file){
    
    var data = JSON.parse(fs.readFileSync(file, "utf-8"))
    return data;
 
}

module.exports = {read}