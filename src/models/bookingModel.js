const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
    show: {
        type: Schema.Types.ObjectId,
        ref: "shows"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    seats: {
        type: Array,
        required: true,
    },
    transactionId: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const Booking = model("bookings", bookingSchema);

