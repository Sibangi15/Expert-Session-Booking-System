const generateSlots = (
    startHour = 10,
    endHour = 17
) => {

    const slots = [];

    for (let hour = startHour; hour < endHour; hour++) {

        const formattedHour =
            hour > 12
                ? hour - 12
                : hour;

        const suffix =
            hour >= 12
                ? "PM"
                : "AM";

        slots.push(
            `${formattedHour}:00 ${suffix}`
        );
    }

    return slots;
};

module.exports = generateSlots;