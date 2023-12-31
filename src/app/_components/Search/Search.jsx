import { useState } from "react";
import styles from "./Search.module.scss";

const Search = () => {
    const [inputValue, setInputValue] = useState(null);
    const [suggestions, setSuggestions] = useState(null);
    

    return (
        <>
            <div className="mb-4">
                <div className="position-relative">
                    <input type="text" className="custom-input w-100" placeholder="Busca" />
                    <button className={`${styles.searchButton}`}>
                        <img src="/svg/search.svg" alt="" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Search;
