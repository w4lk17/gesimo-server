import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    age: Number,
    email: String,
    password: String,
    role: Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const UserMessage = mongoose.model('UserMessage', userSchema);

export default UserMessage;