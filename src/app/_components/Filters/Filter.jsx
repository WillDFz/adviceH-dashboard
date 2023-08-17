import styles from "./Filters.module.scss";

const Filter = () => {
    return (
        <div>
            <div className="d-flex">
                <button className={`${styles.filterButton} me-3`}>
                    <img src="/svg/filter.svg" alt="" />
                </button>
                <div>Filtros Avançados</div>
            </div>
        </div>
    );
};

export default Filter;
