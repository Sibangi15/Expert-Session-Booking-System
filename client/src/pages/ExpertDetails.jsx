import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import socket from "../socket/socket";

function ExpertDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [expert, setExpert] = useState(null);
    const [bookedSlots, setBookedSlots] = useState([]);

    useEffect(() => {
        fetchExpert();
        socket.on("slotBooked", (data) => {
            if (data.expertId === id) {
                setBookedSlots((prev) => [
                    ...prev,
                    data.timeSlot
                ]);
            }
        });

        return () => {
            socket.off("slotBooked");
        };

    }, []);

    const fetchExpert = async () => {
        try {
            const { data } = await api.get(`/experts/${id}`);
            setExpert(data.expert);
            setBookedSlots(data.bookedSlots);
        } catch (error) {
            console.log(error);
        }
    };

    if (!expert) {
        return <h1 className="p-10">Loading...</h1>;
    }

    return (

        <div className="details-page">

            <div className="details-card">

                <div className="details-header">

                    <div className="details-avatar">
                        {expert.name.charAt(0)}
                    </div>

                    <div>
                        <h1>{expert.name}</h1>
                        <p className="details-category">
                            {expert.category}
                        </p>
                    </div>

                </div>

                <div className="details-meta">

                    <div className="meta-box">
                        <span>Experience: </span>
                        <strong>
                            {expert.experience} Years
                        </strong>
                    </div>

                    <div className="meta-box">
                        <span>Rating: </span>
                        <strong>
                            ⭐ {expert.rating}
                        </strong>
                    </div>

                </div>

                <div className="bio-section">
                    <h3>About</h3>
                    <p>{expert.bio}</p>
                </div>

            </div>

            <div className="slots-section">
                <h2>Available Slots</h2>
                {
                    expert.availableSlots.map((item) => (
                        <div
                            key={item.date}
                            className="slot-day-card"
                        >
                            <h3>{item.date}</h3>
                            <div className="slots-grid">
                                {
                                    item.slots
                                        .filter(
                                            (slot) =>
                                                !bookedSlots.some(
                                                    (booked) =>
                                                        booked.date === item.date &&
                                                        booked.slot === slot
                                                )
                                        )
                                        .map((slot) => (

                                            <button
                                                key={slot}
                                                onClick={() =>
                                                    navigate(`/booking/${id}`, {
                                                        state: {
                                                            date: item.date,
                                                            slot
                                                        }
                                                    })
                                                }
                                                className="slot-btn"
                                            >
                                                {slot}
                                            </button>

                                        ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ExpertDetails;