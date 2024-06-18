import mongoose, { Schema, Document, Model } from "mongoose";

// Define an interface representing a User document
export interface UserDocument extends Document {
    tags: string[];
}

// Define a TypeScript interface for the User model (optional but can be useful)
export interface UserModel extends Model<UserDocument> {}

let User: Model<UserDocument>;

try {
    // Try to retrieve an existing model to prevent OverwriteModelError
    User = mongoose.model<UserDocument>('User');
} catch (error) {
    // Define the schema for the User if it doesn't exist
    const userSchema = new Schema<UserDocument>({
        tags: {
            type: [{ type: String }],
            required: false,
            default: [],
        },
    }, { timestamps: true });

    // Define and export the User model
    User = mongoose.model<UserDocument, UserModel>('User', userSchema);
}

export default User;
