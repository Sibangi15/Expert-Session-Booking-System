import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import api from "../api/axios";

function Booking() {

    const { id } = useParams();
    const location = useLocation();

    const {
        date,
        slot
    } = location.state;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        notes: ""
    });

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (
                !formData.name ||
                !formData.email ||
                !formData.phone
            ) {
                setMessage("All fields required!");
                setMessageType("error");
                return;
            }

            await api.post("/bookings", {
                expertId: id,
                date,
                timeSlot: slot,
                ...formData
            });

            setMessage("Booking successful!");
            setMessageType("success");

        } catch (error) {
            setMessage(
                error.response?.data?.message
            );
            setMessageType("error");
        }
    };

    return (

        <div className="booking-page">
            <div className="booking-card">

                <div className="booking-header">
                    <h1>Book Session</h1>
                    <p>
                        Complete your booking details below
                    </p>
                </div>

                <div className="booking-summary">
                    <div>
                        <span>Date </span>
                        <strong>{date}</strong>
                    </div>

                    <div>
                        <span>Time Slot </span>
                        <strong>{slot}</strong>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="booking-form"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                    />
                    <textarea
                        name="notes"
                        placeholder="Additional Notes"
                        rows="5"
                        onChange={handleChange}
                    />
                    <button className="primary-btn full-width">
                        Confirm Booking
                    </button>
                </form>

                {
                    message && (
                        <p
                            className={
                                messageType === "success"
                                    ? "booking-message success-message"
                                    : "booking-message error-message"
                            }
                        >
                            {message}
                        </p>
                    )
                }

            </div>
        </div>
    );
}

export default Booking;