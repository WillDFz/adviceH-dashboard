"use client";
import Image from "next/image";
import styles from "./LoginForm.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";

const LoginForm = () => {
    const router = useRouter();

    // user info states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
            role: role,
        };
        console.log(user);

        router.push("/pages/dashboard");
    };

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col lg={3} className={`${styles.loginCard} p-4`}>
                    <form className="d-flex flex-column" onSubmit={(e) => handleSubmit(e)}>
                        <h1 className="text-info-gradient text-center font-24 fw-bold my-4">
                            Área do Colaborador
                        </h1>
                        <label className="font-12 mb-2" htmlFor="">
                            Digite seu nome de usuário
                        </label>
                        <div className="position-relative mb-4">
                            <Image
                                className="input-icon ms-3"
                                alt=""
                                src={"/svg/user.svg"}
                                width={12}
                                height={12}
                            />
                            <input
                                className="custom-input ps-5"
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Insira um usuário"
                                required
                            />
                        </div>
                        <label className="font-12 mb-2" htmlFor="password">
                            Digite sua senha
                        </label>
                        <div className="position-relative mb-2">
                            <Image
                                className="input-icon ms-3"
                                alt=""
                                src={"/svg/key.svg"}
                                width={12}
                                height={12}
                            />
                            <input
                                className="custom-input ps-5"
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Insira uma senha (ex: 12345678)"
                                name="password"
                                required
                            />
                            <button
                                className={`${styles.eyeBtn} btn`}
                                type="button"
                                onClick={(e) => setShowPassword(!showPassword)}
                            >
                                <Image
                                    src={showPassword ? "/svg/eye_closed.svg" : "/svg/eye.svg"}
                                    alt=""
                                    width={12}
                                    height={12}
                                />
                            </button>
                        </div>

                        <Link href="/auth/reset" className="text-info text-end font-12 mb-3">
                            Esqueceu a senha?
                        </Link>

                        <label className="font-12 mb-2" htmlFor="role">
                            Escolha seu cargo
                        </label>
                        <div className="position-relative mb-4">
                            <Image
                                className="input-icon ms-3"
                                alt="user icon"
                                src={"/svg/suitcase.svg"}
                                width={12}
                                height={12}
                            />
                            <select
                                className="custom-select ps-5"
                                onChange={(e) => setRole(e.target.value)}
                                name="role"
                            >
                                <option value="" defaultValue="">
                                    Cargo 1
                                </option>
                                <option value="">Cargo 2</option>
                                <option value="">Cargo 3</option>
                            </select>
                        </div>

                        <button className="custom-btn custom-success-bg btn" type="submit">
                            Entrar
                        </button>
                    </form>
                </Col>
                <Col
                    lg={2}
                    className={`${styles.loginLogoContainer} d-flex justify-content-center align-items-center bg-info-gradient`}
                >
                    <Image src={"/images/logo-placeholder.png"} alt="" width={100} height={50} />
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;
