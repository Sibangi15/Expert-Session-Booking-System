require("dotenv").config();

const mongoose = require("mongoose");

const Expert = require("./models/Expert");

const generateSlots = require("./utils/generateSlots");

mongoose.connect(process.env.MONGO_URI);

const experts = [
    {
        name: "Rick Morrison",
        category: "Web Development",
        experience: 2,
        rating: 4.1,
        bio: "JavaScript expert",

        availableSlots: [
            {
                date: "2026-05-10",
                slots: generateSlots()
            }
        ]
    },

    {
        name: "Anita Johnson",
        category: "Data Science",
        experience: 10,
        rating: 4.7,
        bio: "Data Science and Machine Learning Consultant",

        availableSlots: [

            {
                date: "2026-05-10",
                slots: generateSlots()
            },

            {
                date: "2026-05-11",
                slots: [
                    "2:00 PM",
                    "4:00 PM"
                ]
            },

            {
                date: "2026-05-12",
                slots: generateSlots()
            }
        ]
    },

    {
        name: "Leo Grant",
        category: "UI/UX",
        experience: 6,
        rating: 4.7,
        bio: "Senior UI/UX Consultant",

        availableSlots: [
            {
                date: "2026-05-12",
                slots: generateSlots()
            }
        ]
    }
];

const seedExperts = async () => {

    try {

        await Expert.deleteMany();

        await Expert.insertMany(experts);

        console.log("Experts Seeded");

        process.exit();

    } catch (error) {

        console.log(error);

        process.exit(1);
    }
};

seedExperts();