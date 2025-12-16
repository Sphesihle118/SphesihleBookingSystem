import mongoose from "mongoose"

import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters"],
        maxLength: [30, "First name cannot contain more than 30 characters"],
    },

    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters"],
        maxLength: [30, "Last name cannot contain more than 30 characters"],
    },

    phone:{
        type: String,
        required: true,
        minLength: [10, "Phone number must be at least 10 digits"],
        maxLength: [10, "Phone number can only contain 10 digits"],
    },

    email: {
       type: String,
        required: true,
        validate: [validator.isEmail, "provide a valid email address!"],
    },

    guests:{
        type: String,
        required: true,
    },

    date: {
       type: String,
       required: true,

    },
    time: {
       type: String,
       required: true,

    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
