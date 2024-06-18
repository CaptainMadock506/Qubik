import mongoose, { Schema, Document, Model } from 'mongoose';

export enum Status {
    Chatting = 'Chatting',
    Waiting = 'Waiting',
    Paused = 'Paused'
}

export interface _user extends Document {
    _uid: string;
}

export interface RoomDocument extends Document {
    users: _user[];
    status: {
        type: string;
        enum: Status[];
        default: Status.Waiting;
    };
}

export interface RoomModel extends Model<RoomDocument> {}

let Room: Model<RoomDocument>;

try {
    // Try to retrieve an existing model to prevent OverwriteModelError
    Room = mongoose.model<RoomDocument>('Room');
} catch (error) {
    // Define the schema for the Room if it doesn't exist
    const roomSchema = new Schema<RoomDocument>({
        users: {
            type: [{ type: Schema.Types.ObjectId, ref: '_user' }],
            default: [],
        },
        status: {
            type: String,
            enum: Object.values(Status),
            default: Status.Waiting,
        },
    }, { timestamps: true });

    // Define and export the Room model
    Room = mongoose.model<RoomDocument, RoomModel>('Room', roomSchema);
}

export default Room;