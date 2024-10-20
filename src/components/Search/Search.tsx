"use client"
import styles from "./Search.module.css";
import {useState} from "react";
import {useAppDispatch} from "@/hooks/hooks";
import {setFilter} from "@/store/features/playerSlice";

function Search () {
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState("")

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
        dispatch(setFilter({key: "search", value: e.target.value}))
    }

    return (
        <div className={styles.search}>
            <svg>
                <use xlinkHref="/img/icon/sprite.svg#icon-search" />
            </svg>
            <input
                onChange={handleChange}
                value={inputValue}
                className={styles.searchText}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    )
}

export default Search;