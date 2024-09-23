import mongoose from 'mongoose';


const DataSchema = new mongoose.Schema(
    {
        email: {type: String, required: true, unique: true, lowercase: true,trim: true},
        otp: {type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const usersModel = mongoose.model('users', DataSchema);

export default usersModel;