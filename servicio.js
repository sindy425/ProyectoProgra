const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { "content-Type": "text/plane" });
    res.end("PROGRAMACION 3");
});
