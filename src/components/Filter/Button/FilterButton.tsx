import classNames from "classnames";
import styles from "@/components/Filter/Filter.module.css";
import shared from "@/components/SharedButtons/SharedButtons.module.css";
import {FilterItem} from "@/components/Filter/FilterItem/FilterItem/FilterItem";

type FilterButtonProps = {
    title: string,
    opened: boolean,
    filterList: string[],
    activeFilter: (filter: string) => void
}

function FilterButton({title, opened, filterList, activeFilter}: FilterButtonProps) {
    return (
        <div className={styles.filterButtonWrapper}>
            <div className={classNames(styles.filterButton, shared.btnText)} onClick={() => activeFilter(title)}>
                {title}
            </div>
            {opened && <FilterItem filterOptions={filterList}/>}
        </div>

    )
}

export default FilterButton;