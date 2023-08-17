import Link from "next/link";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={`${styles.sidebar} custom-primary-bg`}>
            <div className={`${styles.navItem} custom-text-light p-3`}>
                <Link href="dashboard">Área de Trabalho</Link>
            </div>
            <div className={`${styles.navItem} custom-text-light p-3`}>
                <Link href="schedule">Agendamento de Consulta</Link>
            </div>
            <div className={`${styles.navItem} custom-text-light p-3`}>
                <Link href="appointments">Consulta de Agendamentos</Link>
            </div>
        </div>
    );
};

export default Sidebar;
