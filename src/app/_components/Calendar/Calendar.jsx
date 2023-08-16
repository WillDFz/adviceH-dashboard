import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <section className="calendar-container mb-3">
            <Calendar onChange={handleDateChange} value={date} />
        </section>
    );
};

export default CalendarComponent;
