import {Plugin} from "fastify";
import * as http from "http";

import devices from "./routes/devices"
import timeframes from "./routes/timeframes"

const route: Plugin<http.Server, http.IncomingMessage, http.ServerResponse, {prefix: String}> = async (fastify, opts) => {
    fastify.register(devices, {prefix: "/devices"});
    fastify.register(timeframes, {prefix: "/timeframes"});
};

export default route;