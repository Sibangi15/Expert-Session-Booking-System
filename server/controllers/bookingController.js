const Booking = require("../models/Booking");

let io;

const setSocketInstance = (socketIo) => {
    io = socketIo;
};

const createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);

        /*
        Emit realtime update
        */
        io.emit("slotBooked", {
            expertId: booking.expertId,
            date: booking.date,
            timeSlot: booking.timeSlot
        });

        res.status(201).json({
            message: "Booking successful",
            booking
        });

    } catch (error) {

        /*
        Duplicate booking
        */
        if (error.code === 11000) {
            return res.status(400).json({
                message: "Slot already booked"
            });
        }

        res.status(500).json({
            message: error.message
        });
    }
};

const updateBookingStatus = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status
            },
            {
                new: true
            }
        );

        res.json(booking);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getBookingsByEmail = async (req, res) => {
    try {
        const bookings = await Booking.find({
            email: req.query.email
        }).populate("expertId");

        res.json(bookings);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createBooking,
    updateBookingStatus,
    getBookingsByEmail,
    setSocketInstance
};