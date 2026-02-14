import http from "http";

const PORT = Number(process.env.PORT ?? 3001);

const server = http.createServer((req, res) => {
    if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true }));
        return;
    }
    res.writeHead(404);
    res.end();
});

server.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});