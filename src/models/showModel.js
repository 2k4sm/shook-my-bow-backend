const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies',
        required: true
    },
    ticketPrice: {
        type: Number,
        required: true
    },
    totalSeats: {
        type: Number,
        required: true
    },
    bookedSeats: {
        type: Array,
        default: []
    },
    theatre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'theatres',
        required: true
    },
}, {timestamps: true }
    );

export const findByIdAndUpdate = async (id, updateData) => {
    try {
        const updatedShow = await Show.findByIdAndUpdate(id, updateData, { new: true });
        return updatedShow;
    } catch (error) {
        throw new Error('Error updating show by ID');
    }
};


export const Show = mongoose.model("shows", showSchema);