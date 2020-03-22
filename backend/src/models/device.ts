import {model, Model, Schema} from "mongoose";
import * as mongoose from "mongoose";

export interface IDeviceModel extends mongoose.Document {
    deviceId: string,
    name: string,
    type: string,
    measurementMethod: string,
    interruptionsAllowed: boolean,
    maxPower: number,
    emSignalsAccepted: boolean,
    status: string,
    vendor: string,
    serialNr: string,
    absoluteTimestamps: boolean,
    optionalEnergy: boolean,
    minOnTime?: number,
    minOffTime?: number,
    url?: string
}

export const DeviceSchema = new Schema({
    deviceId: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    measurementMethod: {type: String, required: true},
    interruptionsAllowed: {type: Boolean, required: true},
    maxPower: {type: Number, required: true},
    emSignalsAccepted: {type: Boolean, required: true},
    status: {type: String, required: true},
    vendor: {type: String, required: true},
    serialNr: {type: String, required: true},
    absoluteTimestamps: {type: Boolean, required: true},
    optionalEnergy: {type: Boolean, required: true},
    minOnTime: Number,
    minOffTime: Number,
    url: String
});

export const Device: Model<IDeviceModel> = model<IDeviceModel>("Device", DeviceSchema);