import React from "react";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={`${styles.sidebar} custom-primary-bg`}>
            <div className={`${styles.navItem} custom-text-light p-3`}>Área de Trabalho</div>
            <div className={`${styles.navItem} custom-text-light p-3`}>Agendamento de Consulta</div>
            <div className={`${styles.navItem} custom-text-light p-3`}>Consulta de Agendamentos</div>
        </div>
    );
};

export default Sidebar;
