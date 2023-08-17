"use-client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import Hamburger from "hamburger-react";
import styles from "./Header.module.scss";
import Sidebar from "./Sidebar/Sidebar";

const Header = () => {
    const pathname = usePathname();
    const pageName = pathname.split("/pages/")[1];

    const [isOpen, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!isOpen);

        /** Toggle body overflow */ 
        document.body.style.overflow = !isOpen ? "auto" : "hidden";
    };

    return (
        <>
            <div className={`${styles.header}`}>
                <Container fluid>
                    <Row className="px-5">
                        <Col lg={2} className="d-flex align-items-center">
                            <div>
                                <Hamburger color="#f4f4f4" toggled={isOpen} toggle={setOpen} />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="text-center">
                                <h3 className="custom-text-light text-capitalize">{pageName}</h3>
                                <h6 className="custom-text-light">Lorem ipsum</h6>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end">
                            <div className="d-flex justify-content-end">
                                <div className="text-center">
                                    <img src="/svg/user.svg" className={styles.userImg} alt="" />
                                    <div className="custom-text-light">Usuário</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {isOpen && (
                <>
                    <div className="overlay" onClick={toggleSidebar}></div>
                    <Sidebar />
                </>
            )}
        </>
    );
};

export default Header;
