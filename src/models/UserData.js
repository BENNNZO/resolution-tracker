import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    sleepDuration: {
        type: Number,
        required: true
    },
    overallMood: {
        type: Number,
        required: true
    },
    cals: {
        type: Number,
        required: true
    },
    wakeupTime: {
        type: Object,
        required: true
    },
    sleepTime: {
        type: Object,
        required: true
    },
    jerk: {
        type: Boolean,
        required: true
    },
    outside: {
        type: Boolean,
        required: true
    },
    exercise: {
        type: Boolean,
        required: true
    },
    school: {
        type: Boolean,
        required: true
    },
    work: {
        type: Boolean,
        required: true
    },
    game: {
        type: Boolean,
        required: true
    },
    smoke: {
        type: Boolean,
        required: true
    },
    nic: {
        type: Boolean,
        required: true
    },
    alc: {
        type: Boolean,
        required: true
    },
    socialized: {
        type: Boolean,
        required: true
    },
    cleaned: {
        type: Boolean,
        required: true
    },
    cooked: {
        type: Boolean,
        required: true
    }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;