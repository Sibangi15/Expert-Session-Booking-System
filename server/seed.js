require("dotenv").config();

const mongoose = require("mongoose");

const Expert = require("./models/Expert");

const generateSlots = require("./utils/generateSlots");

mongoose.connect(process.env.MONGO_URI);

// const experts = [
//     {
//         name: "Rick Morrison",
//         category: "Web Development",
//         experience: 2,
//         rating: 4.1,
//         bio: "JavaScript expert",

//         availableSlots: [
//             {
//                 date: "2026-05-10",
//                 slots: generateSlots()
//             }
//         ]
//     },

//     {
//         name: "Anita Johnson",
//         category: "Data Science",
//         experience: 10,
//         rating: 4.7,
//         bio: "Data Science and Machine Learning Consultant",

//         availableSlots: [

//             {
//                 date: "2026-05-10",
//                 slots: generateSlots()
//             },

//             {
//                 date: "2026-05-11",
//                 slots: [
//                     "2:00 PM",
//                     "4:00 PM"
//                 ]
//             },

//             {
//                 date: "2026-05-12",
//                 slots: generateSlots()
//             }
//         ]
//     },

//     {
//         name: "Leo Grant",
//         category: "UI/UX",
//         experience: 6,
//         rating: 4.7,
//         bio: "Senior UI/UX Consultant",

//         availableSlots: [
//             {
//                 date: "2026-05-12",
//                 slots: generateSlots()
//             }
//         ]
//     }
// ];

const experts = [

    {
        name: "Rick Morrison",
        category: "Web Development",
        experience: 2,
        rating: 4.1,
        bio: "JavaScript expert specializing in React and Express.",

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
        bio: "Data Science and Machine Learning Consultant.",

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
        bio: "Senior UI/UX Consultant focused on modern interfaces.",

        availableSlots: [
            {
                date: "2026-05-12",
                slots: generateSlots()
            }
        ]
    },

    {
        name: "Sophia Miller",
        category: "Cyber Security",
        experience: 8,
        rating: 4.9,
        bio: "Cybersecurity specialist and ethical hacker.",

        availableSlots: [
            {
                date: "2026-05-10",
                slots: generateSlots()
            },

            {
                date: "2026-05-13",
                slots: [
                    "11:00 AM",
                    "1:00 PM",
                    "3:00 PM"
                ]
            }
        ]
    },

    {
        name: "Daniel Carter",
        category: "Web Development",
        experience: 5,
        rating: 4.5,
        bio: "React Native and Flutter web app developer.",

        availableSlots: [
            {
                date: "2026-05-11",
                slots: generateSlots()
            }
        ]
    },

    {
        name: "Emily Watson",
        category: "Cloud Computing",
        experience: 7,
        rating: 4.8,
        bio: "AWS Certified Cloud Solutions Architect.",

        availableSlots: [
            {
                date: "2026-05-12",
                slots: generateSlots()
            },

            {
                date: "2026-05-14",
                slots: [
                    "10:00 AM",
                    "12:00 PM",
                    "5:00 PM"
                ]
            }
        ]
    },

    {
        name: "Michael Brown",
        category: "DevOps",
        experience: 9,
        rating: 4.6,
        bio: "DevOps engineer experienced with Docker and Kubernetes.",

        availableSlots: [
            {
                date: "2026-05-10",
                slots: generateSlots()
            }
        ]
    },

    {
        name: "Olivia Harris",
        category: "AI/ML",
        experience: 4,
        rating: 4.4,
        bio: "AI engineer focused on NLP and Generative AI.",

        availableSlots: [
            {
                date: "2026-05-11",
                slots: generateSlots()
            },

            {
                date: "2026-05-15",
                slots: [
                    "1:00 PM",
                    "2:00 PM",
                    "6:00 PM"
                ]
            }
        ]
    },

    {
        name: "James Walker",
        category: "Web Development",
        experience: 11,
        rating: 4.9,
        bio: "Backend architect specializing in scalable APIs.",

        availableSlots: [
            {
                date: "2026-05-13",
                slots: generateSlots()
            }
        ]
    },

    {
        name: "Charlotte Evans",
        category: "UI/UX",
        experience: 5,
        rating: 4.3,
        bio: "UI/UX designer with a focus on user-centered design.",

        availableSlots: [
            {
                date: "2026-05-14",
                slots: generateSlots()
            },

            {
                date: "2026-05-16",
                slots: [
                    "9:00 AM",
                    "11:00 AM",
                    "4:00 PM"
                ]
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