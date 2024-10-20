import classNames from "classnames";
import styles from "@/components/Filter/Filter.module.css";
import shared from "@/components/SharedButtons/SharedButtons.module.css";
import {FilterItem} from "@/components/Filter/FilterItem/FilterItem/FilterItem";
import {FilterKeyType} from "@/store/features/playerSlice";
import {useAppSelector} from "@/hooks/hooks";

type FilterButtonProps = {
    title: string,
    filterKey: FilterKeyType,
    opened: boolean,
    filterList: string[],
    activeFilter: (filter: string) => void
}

function FilterButton({title, filterKey, opened, filterList, activeFilter}: FilterButtonProps) {
    const filter = useAppSelector(state => state.player?.filterOptions[filterKey])
    return (
        <div className={styles.filterButtonWrapper}>
            <div className={classNames(styles.filterButton, shared.btnText, {[styles.active]:filter?.length || 0})} onClick={() => activeFilter(title)}>
                {title}
            </div>
            {filter?.length ? <div className={styles.mark}>{filter.length}</div> : null}
            {opened && <FilterItem filter={filter} filterKey={filterKey} filterOptions={filterList}/>}
        </div>

    )
}

export default FilterButton;