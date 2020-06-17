const http = require('http');

http.createServer((req, res) => {
    // res.write("Hola mundo desde la Web!");
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let content = {
            nombre: "Rodrigo",
            edad: 37,
            url: req.url
        }
        // envia un json al cliente
    res.write(JSON.stringify(content))
    res.end();
}).listen(8000);

console.log("Escuchando el puerto 8000");