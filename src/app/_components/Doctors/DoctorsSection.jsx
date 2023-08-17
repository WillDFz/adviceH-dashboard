import SimpleCard from "./../UI/SimpleCard/SimpleCard";
import styles from "./DoctorsSection.module.scss";

const DoctorsSection = () => {
    return (
        <section className={`${styles.doctorsSection} section-bg-light mb-4`}>
            <h4>Médicos</h4>
            <SimpleCard img={"/svg/user.svg"} title={"Dr.Saulo"} subtitle={"Pediatra"} />
            <SimpleCard img={"/svg/user.svg"} title={"Dr.Saulo"} subtitle={"Pediatra"} />
            <SimpleCard img={"/svg/user.svg"} title={"Dr.Saulo"} subtitle={"Pediatra"} />
            <SimpleCard img={"/svg/user.svg"} title={"Dr.Saulo"} subtitle={"Pediatra"} />
            <SimpleCard img={"/svg/user.svg"} title={"Dr.Saulo"} subtitle={"Pediatra"} />
            <SimpleCard img={"/svg/user.svg"} title={"Dr.Saulo"} subtitle={"Pediatra"} />
            <SimpleCard img={"/svg/user.svg"} title={"Dr.Saulo"} subtitle={"Pediatra"} />
        </section>
    );
};

export default DoctorsSection;
