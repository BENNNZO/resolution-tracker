import mongoose from 'mongoose';

const userDataSchema = new mongoose.Schema({
    sleepDuration: {
        type: Number,
        required: true,
        default: 0
    },
    mood: {
        type: Number,
        required: true,
        default: 0
    },
    calories: {
        type: Number,
        required: true,
        default: 0
    },
    wakeupTime: {
        type: Object,
        required: true,
        default: {}
    },
    sleepTime: {
        type: Object,
        required: true,
        default: {}
    },
    jerk: {
        type: Boolean,
        required: true,
        default: false
    },
    outside: {
        type: Boolean,
        required: true,
        default: false
    },
    exercise: {
        type: Boolean,
        required: true,
        default: false
    },
    school: {
        type: Boolean,
        required: true,
        default: false
    },
    work: {
        type: Boolean,
        required: true,
        default: false
    },
    game: {
        type: Boolean,
        required: true,
        default: false
    },
    smoke: {
        type: Boolean,
        required: true,
        default: false
    },
    nic: {
        type: Boolean,
        required: true,
        default: false
    },
    alc: {
        type: Boolean,
        required: true,
        default: false
    },
    socialized: {
        type: Boolean,
        required: true,
        default: false
    },
    cleaned: {
        type: Boolean,
        required: true,
        default: false
    },
    cooked: {
        type: Boolean,
        required: true,
        default: false
    },
    notes: {
        type: String,
        required: false,
        default: ""
    },
    date: {
        type: String,
        required: true,
        default: ""
    }
});

const UserData = mongoose.models.UserData || mongoose.model('UserData', userDataSchema);

export default UserData;