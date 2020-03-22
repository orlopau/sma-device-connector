import {MongoMemoryServer} from "mongodb-memory-server";
import * as mongoose from "mongoose";
import {Mongoose} from "mongoose";

export default class TestDBHelper {
    public server: MongoMemoryServer;
    public mongooseConnection: Mongoose;

    constructor() {
        this.server = new MongoMemoryServer();
    }

    async start() {
        const url = await this.server.getUri();
        this.mongooseConnection = await mongoose.connect(url, {useNewUrlParser: true});
    }

    async stop() {
        await this.mongooseConnection.connection.close();
        return this.server.stop();
    }

    async cleanup() {
        await this.mongooseConnection.connection.dropDatabase();
    }
}