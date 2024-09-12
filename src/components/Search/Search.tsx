import styles from "./Search.module.css";

function Search () {
    return (
        <div className={styles.search}>
            <svg>
                <use xlinkHref="/img/icon/sprite.svg#icon-search" />
            </svg>
            <input
                className={styles.searchText}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    )
}

export default Search;