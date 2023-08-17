import { useState } from "react";
import SimpleCard from "./../UI/SimpleCard/SimpleCard";
import styles from "./DoctorsSection.module.scss";

import json from "../../json/doctors.json";

const DoctorsSection = () => {
    const [doctors, setDoctors] = useState(json);
    return (
        <section className={`${styles.doctorsSection} section-bg-light mb-4`}>
            <h4>Médicos</h4>
            {doctors?.map((doctor, index) => (
                <SimpleCard
                    key={index}
                    img={doctor?.image}
                    title={doctor?.name}
                    subtitle={doctor?.specialty}
                />
            ))}
        </section>
    );
};

export default DoctorsSection;
