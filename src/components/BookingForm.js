import React, { useState } from "react";

const BookingForm = (props) => {
  const [reservation, setReservation] = useState({
    date: "",
    times: "",
  });
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setReservation({
      ...reservation,
      times: e.target.value,
    });
  };

  const formatTime = (time) => {
    // Format time from 24-hour to 12-hour format
    const [hours, minutes] = time.split(":");
    const isPM = parseInt(hours) >= 12;
    const formattedHours = isPM ? parseInt(hours) - 12 : parseInt(hours);
    return `${formattedHours}:${minutes} ${isPM ? "PM" : "AM"}`;
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={reservation.date}
                onChange={(e) =>
                  setReservation({ ...reservation, date: e.target.value })
                }
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={reservation.times}
                onChange={handleChange}
                required
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTime) => (
                  <option key={availableTime} value={availableTime}>
                    {formatTime(availableTime)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                placeholder="0"
                max="20"
                required
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select an Option</option>
                <option>N/A</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Just Because</option>
              </select>
            </div>
            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value="Make Your Reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;