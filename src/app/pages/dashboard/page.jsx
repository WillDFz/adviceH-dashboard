"use client";
import Search from "./../../_components/Search/Search";
import { Container, Row, Col } from "react-bootstrap";
import Panel from "./../../_components/Panel/Panel";
import DashboardTable from "./../../_components/Tables/DashboardTable/DashboardTable";
import CalendarComponent from "./../../_components/Calendar/Calendar";
import Header from './../../_components/UI/Header/Header';
import DoctorsSection from './../../_components/Doctors/DoctorsSection';

const page = () => {
    return (
        <div>
            <Header/>
            <Container className="mt-4">
                <Row>
                    <Col lg={{ span: 8 }}>
                        <Search />
                        <Panel />
                        <DashboardTable title={"Avisos/Lembretes"} />
                    </Col>
                    <Col lg={{ span: 4 }}>
                        <CalendarComponent />
                        <DoctorsSection/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default page;
