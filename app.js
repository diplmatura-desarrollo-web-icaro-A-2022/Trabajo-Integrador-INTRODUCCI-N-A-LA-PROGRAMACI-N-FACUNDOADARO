
const fs = require("fs");
const {read} = require("./crud/read.js");
const {create} = require("./crud/create.js");
const {write} = require("./crud/write.js");
const {editar} = require("./crud/editar.js");
const {edit} = require("./crud/edit.js");
const {borrar} = require("./crud/borrar.js")
const {editid} = require("./crud/editid.js");

const file ="./libros.json";
const fileid="./id.json";

const entrada = process.argv;

const comando = entrada [2];
const parametro1 = entrada [3];
const parametro2 = entrada [4];
const parametro3 = entrada [5];
const parametro4 = entrada [6];
const parametro5 = entrada [7];
const parametro6 = entrada [8];
const parametro7 = entrada [9];

let parametro8 

switch (comando) {
    case "new":
       
        parametro8= read(fileid)
        parametro8.id= (parametro8.id +1)  
        write(parametro8,fileid)
        let num
        num = parametro8.id
        
        create(file,num,parametro1,parametro2,parametro3,parametro4,parametro5,parametro6)
        console.log("agrego");
    break;
    case "read":
        console.log(read(file));

    break;
    case "edit":
        edit(file,parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7);
        console.log("edit");
    break;
    case "delete":
        borrar(file, parametro1)
        console.log("borrar")
    break;
    default:
        console.log("ingrese una opcion valida - new - read - edit - delete")


}