const express = require('express');
const server = express();
server.all('/', (_, res) => {
    res.sendFile('/index.html', {root: __dirname })
})

server.all('/about', (_, res) => {
    res.sendFile('/about.html', {root: __dirname })
})

server.use(express.static(__dirname + "/static"))

function keepAlive() {
    server.listen(3000, () => console.log("Server is Ready!"));
}
module.exports = keepAlive;
