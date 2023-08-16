import { useState } from "react";
import { usePathname } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import Hamburger from "hamburger-react";
import styles from "./header.module.scss";
import Sidebar from "./Sidebar/Sidebar";

const Header = () => {
    const pathname = usePathname();
    const pageName = pathname.split("/pages/")[1];

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={styles.header}>
                <Container fluid>
                    <Row className="px-5">
                        <Col lg={2} className="d-flex align-items-center">
                            <div>
                                <Hamburger toggled={isOpen} toggle={setOpen} />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="text-center">
                                <h1 className="custom-text-light text-capitalize">{pageName}</h1>
                                <h6 className="custom-text-light">Lorem ipsum</h6>
                            </div>
                        </Col>
                        <Col>
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

            {isOpen && <Sidebar />}
        </>
    );
};

export default Header;
