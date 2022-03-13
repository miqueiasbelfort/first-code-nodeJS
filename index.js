// import -> Não vamos ultilizar agr
const fs = require("fs") //File Systema

fs.readFile("arquivo.txt", "utf-8", (err, data) => {

    if (err){ //Se der erro 
        console.log(err) //Imprimir erro
        return
    }
    console.log(data) // Imprimir resiultado que no caso é o arquivo.txt

})
// Programa para ler arquivos txt, com um module 
// interno do Node Js, sem precisar estalar 
// alguma biblioteca