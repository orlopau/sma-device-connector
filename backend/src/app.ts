// Setup
import fastify from "fastify";

const server = fastify({
    logger: true
});

// Routing
import router from "./api"

server.register(router, {
    prefix: "v1"
});

// Server
server.listen(8080, "0.0.0.0", (err, address) => {
    console.log(`Server listening on ${address}`);
});
