"use client"
import styles from "./Filter.module.css";
import {FilterKind, TrackType} from "@/types/tracks";
import {useState} from "react";
import FilterButton from "@/components/Filter/Button/FilterButton";
import {FilterKeyType} from "@/store/features/playerSlice";

const filterKind: string[] = [
    FilterKind.artist,
    FilterKind.genre,
    FilterKind.year]

const filterKeys: Record<FilterKind, FilterKeyType> = {
    [FilterKind.artist]: "authors",
    [FilterKind.genre]: "genres",
    [FilterKind.year]: "sort",
}

type FilterProps = {
    tracks: TrackType[]
}

function Filter({tracks}: FilterProps) {
    const [activeFilter, setActiveFilter] = useState<string | null>(null)

    function getUniqueList(filter: string): string[] {
        switch (filter) {
            case FilterKind.artist:
                return Array.from(new Set<string>(tracks.map((track) => track.author)))
            case FilterKind.genre:
                return Array.from(new Set<string>(tracks.map((track) => track.genre).flat()))
            case FilterKind.year:
                return ["По умолчанию", "Сначала новые", "Сначала старые"]
            default:
                return []
        }
    }

    const handleFilter = (filter: string) => {
        setActiveFilter((prev) => (prev === filter ? null : filter))
    }

    return (
        <div className={styles.filter}>
            <div className={styles.filterTitle}>Искать по:</div>
            {
                filterKind.map((filter, index) => {
                    const list = getUniqueList(filter)

                    if (activeFilter && !list.length)
                        setActiveFilter(null)

                    return (
                        <FilterButton filterKey={filterKeys[filter]} key={index} title={filter} opened={activeFilter === filter}
                                      activeFilter={handleFilter} filterList={list}/>
                    )
                })
            }
        </div>
    )
}

export default Filter;