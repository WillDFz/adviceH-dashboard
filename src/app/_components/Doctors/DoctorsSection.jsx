import React from "react";
import SimpleCard from "./../UI/SimpleCard/SimpleCard";

const DoctorsSection = () => {
    return (
        <section className="section-bg-light">
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
