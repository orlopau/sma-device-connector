import {Device} from "../../src/models/device"
import TestDBHelper from "../db_helper";
import {expect} from "chai";

const dbHelper = new TestDBHelper();

before(async () => {
    await dbHelper.start();
});

after(async () => {
    await dbHelper.stop();
});

afterEach(async () => {
    await dbHelper.cleanup();
});

describe("Device Model", () => {
    it("Should save a device to the db.", async () => {
        await Device.create({
            deviceId: "12312-636-GGG-123",
            name: "TestDevice",
            type: "Refrigerator",
            measurementMethod: "TestMethod",
            interruptionsAllowed: true,
            maxPower: 11000,
            emSignalsAccepted: true,
            status: "TestStatus",
            vendor: "TestVendor",
            serialNr: "12567473",
            absoluteTimestamps: true,
            optionalEnergy: true,
            url: "test/baum/123"
        });

        const devices = await Device.find({name: "TestDevice"}).exec();
        const device = devices.pop();

        expect(device.deviceId).to.equal("12312-636-GGG-123");
    });
});
