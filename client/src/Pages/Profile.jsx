import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { username } = useParams();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancelingId, setCancelingId] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/booking?username=${username}`);
        setBookings(response.data);
      } catch (error) {
        setBookings([]);
      }
      setLoading(false);
    };
    fetchBookings();
  }, [username]);

  const handleCancel = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    setCancelingId(bookingId);
    try {
      await axios.delete(`${BASE_URL}/api/booking/${bookingId}`);
      setBookings((prev) => prev.filter((b) => b._id !== bookingId && b.id !== bookingId));
    } catch (error) {
      alert("Failed to cancel booking. Please try again.");
    }
    setCancelingId(null);
  };

  return (
    <div className="profile-container">
      <div className="profile-title">{username}'s Profile</div>
      <div className="profile-subtitle">Your Bookings:</div>
      {loading ? (
        <div className="booking-item">Loading...</div>
      ) : (
        <ul className="bookings-list">
          {bookings.length === 0 ? (
            <li className="booking-item">No bookings found.</li>
          ) : (
            bookings.map((booking) => {
              const bookingId = booking._id || booking.id;
              return (
                <li className="booking-item" key={bookingId}>
                  <div><strong>Tour:</strong> {booking.tourName || booking.tour || "N/A"}</div>
                 <div><strong>Date:</strong> {booking.bookAt ? new Date(booking.bookAt).toLocaleDateString() : "N/A"}</div>
                 <div><strong>People:</strong> {booking.groupSize || "N/A"}</div>
                 <div><strong>Cost:</strong> {booking.price ? `৳${booking.price}` : "N/A"}</div> <button
                    className="btn btn-danger"
                    style={{ marginTop: "10px" }}
                    onClick={() => handleCancel(bookingId)}
                    disabled={cancelingId === bookingId}
                  >
                    {cancelingId === bookingId ? "Canceling..." : "Cancel Booking"}
                  </button>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
};

export default Profile;