"use client";
import Header from "./../../_components/UI/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./../../_components/Search/Search";
import Filter from "./../../_components/Filters/Filter";
import AppointmentsTable from "./../../_components/Tables/AppointmentsTable/AppointmentsTable";

const page = () => {
    return (
        <div>
            <Header />
            <Container className="mt-4">
                <Row>
                    <Col lg={6}>
                        <Search />
                    </Col>
                    <Col lg={6} className="d-flex justify-content-end">
                        <Filter />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AppointmentsTable />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default page;
