"use client";
import { Container, Row, Col } from "react-bootstrap";
import DoctorsSection from "./../../_components/Doctors/DoctorsSection";
import Header from "./../../_components/UI/Header/Header";
import CalendarComponent from "./../../_components/Calendar/Calendar";
import ScheduleComponent from "./../../_components/Schedule/ScheduleComponent";

const page = () => {
    return (
        <div>
            <Header />
            <Container className="mt-4">
                <Row>
                    <Col lg={4}>
                        <DoctorsSection />
                        <CalendarComponent />
                    </Col>
                    <Col lg={8}>
                        <ScheduleComponent />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default page;
