import styles from "./SimpleCard.module.scss"

const SimpleCard = ({ img, title, subtitle }) => {
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.cardImgContainer} me-3`}>

            <img src={img} className={styles.cardImg} alt="" />
            </div>
            <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
        </div>
    );
};

export default SimpleCard;
