// models/User.ts
import { Schema, model } from 'mongoose';

interface IUser {
    githubId: string;
    username: string;
    email?: string;
    avatar: string;
    name?: string;
}

const userSchema = new Schema<IUser>({
    githubId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    email: String,
    avatar: { type: String, required: true },
    name: String
});

export const User = model<IUser>('User', userSchema);