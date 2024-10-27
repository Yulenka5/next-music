import styles from "../../Filter.module.css";
import classNames from "classnames";
import {useAppDispatch} from "@/hooks/hooks";
import {FilterKeyType, setFilter} from "@/store/features/playerSlice";
import {getBindingIdentifiers} from "@babel/types";
import keys = getBindingIdentifiers.keys;


type FilterListProps = {
    filterKey: FilterKeyType
    filterOptions: string[]
    filter: string | string[]
}


export function FilterItem({filterOptions, filterKey, filter}: FilterListProps) {
    const dispatch = useAppDispatch()


    function handleClick(e: React.MouseEvent<HTMLLIElement>){
        const value = e.target.innerText
        dispatch(setFilter({key: filterKey, value: filterKey === "sort" && value === "По умолчанию" ? "" : value}))
    }

    return (
        <div className={styles.filterListContainer}>
            <ul className={classNames(styles.filterList, {[styles.filterListLong]: filterOptions.length > 5})}>
                {filterOptions.map((item) => {
                    function isActive() {
                        if(filterKey === "sort") {
                            return filter === item || !filter && item === "По умолчанию"
                        }
                        else {
                            return filter.includes(item)
                        }
                    }
                    return (
                        <li onClick={handleClick} key={item}
                            className={classNames(styles.filterLine, {[styles.active]:isActive()})}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}