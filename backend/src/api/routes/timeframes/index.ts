import {Plugin} from "fastify";
import http from "http";

const route: Plugin<http.Server, http.IncomingMessage, http.ServerResponse, {prefix: String}> = async (fastify, opts) => {

};

export default route;