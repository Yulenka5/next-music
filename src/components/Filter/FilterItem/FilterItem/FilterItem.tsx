import styles from "../../Filter.module.css";
import classNames from "classnames";


type FilterListProps = {
    filterOptions: string[]
}

export function FilterItem({filterOptions}: FilterListProps) {

    return (
        <div className={styles.filterListContainer}>
            <ul className={classNames(styles.filterList, {[styles.filterListLong]: filterOptions.length > 5})}>
                {filterOptions.map((filter) => (<li key={filter} className={styles.filterLine}>
                    {filter}
                </li>))
                }
            </ul>
        </div>
    )
}