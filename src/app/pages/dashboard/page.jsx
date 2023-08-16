"use client";
import Header from "@/app/_components/Header/Header";
import Search from "./../../_components/Search/Search";
import { Container, Row, Col } from "react-bootstrap";

const page = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={{span: 7, offset: 1}}>
                        <Search />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default page;
