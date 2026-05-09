import { useState } from "react";
import api from "../api/axios";

function MyBookings() {

    const [email, setEmail] = useState("");
    const [bookings, setBookings] = useState([]);
    const fetchBookings = async () => {

        try {
            const { data } = await api.get(
                `/bookings?email=${email}`
            );
            setBookings(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="bookings-page">

            <div className="page-header">
                <div>
                    <h1>My Bookings</h1>
                    <p>
                        View all your scheduled sessions
                    </p>
                </div>
            </div>

            <div className="booking-search">

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    onClick={fetchBookings}
                    className="primary-btn"
                >
                    Search
                </button>

            </div>

            <div className="bookings-list">

                {
                    bookings.map((booking) => (

                        <div
                            key={booking._id}
                            className="booking-item"
                        >

                            <div className="booking-item-top">

                                <div>
                                    <h2>
                                        {booking.expertId?.name}
                                    </h2>
                                    <p>
                                        {booking.date}
                                    </p>
                                </div>

                                <span className="status-badge">
                                    {booking.status}
                                </span>

                            </div>

                            <div className="booking-item-bottom">
                                <span>
                                    Slot: {booking.timeSlot}
                                </span>
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default MyBookings;