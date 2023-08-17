import React from "react";
import ScheduleCard from "./../UI/ScheduleCard/ScheduleCard";

const ScheduleComponent = () => {
    return (
        <section className="section-bg-light">
            <h4>20/Fev 2022</h4>
            <div>
                <ScheduleCard dateHour={"08:00"} />
                <ScheduleCard dateHour={"08:00"} />
                <ScheduleCard dateHour={"08:00"} />
                <ScheduleCard dateHour={"08:00"} />
                <ScheduleCard dateHour={"08:00"} />
                <ScheduleCard dateHour={"08:00"} />
                <ScheduleCard dateHour={"08:00"} />
            </div>
        </section>
    );
};

export default ScheduleComponent;
