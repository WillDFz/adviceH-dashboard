import styles from "./ScheduleCard.module.scss"

const ScheduleCard = ({ dateHour }) => {
    return (
        <div className={`${styles.card}`}>
            <div className="d-flex align-items-center fs-5 me-3">{dateHour}</div>
            <div>
                <div>Paciente</div>
                <div>Consulta/Retorno</div>
            </div>
            <div className={styles.actionsContainer}>
                <button className={styles.iconButton}>
                    <img src="/svg/date.svg" alt="" />
                </button>
                <button className={styles.iconButton}>
                    <img src="/svg/trash.svg" alt="" />
                </button>
                <button className={styles.iconButton}>
                    <img src="/svg/pen.svg" alt="" />
                </button>
            </div>
        </div>
    );
};

export default ScheduleCard;
