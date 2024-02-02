import { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            max: 100,
            min: 5
        },
        email: {
            type: String,
            required: true,
            unique: true,
            min: 5,
            max: 100
        },
        reg: {
            type: String,
            required: true,
            unique: true,
            min: 10,
            max: 30,
        },
        password: {
            type: String,
            required: true,
            min: 8
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true
    }
)

export const UserModel = Mongoose.models.Users || Mongoose.models("Users", userSchema)