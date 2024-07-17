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

const Booking = model("bookings", bookingSchema);

// Define the find function
const findBookings = async (query) => {
    try {
        const bookings = await Booking.find(query);
        return bookings;
    } catch (error) {
        throw new Error('Error finding bookings');
    }
};

// Export the model and the custom function
module.exports = { Booking, findBookings };
