import React from "react";
import Styles from "../../../assets/scss/styles.module.scss";


interface ITVsListItem {
    columns: IColumn<string>[];
    TVsItem: ITVsListRow;
}

export function TVsListItem({
    columns,
    TVsItem
}: ITVsListItem) {

    return <div className={Styles.TVsListCard}>
        <div key={Math.random()} data-component-name="TVsListCard">
            {
                columns.map((column) => {
                    return column.componentTransform ?
                        column.componentTransform(TVsItem[column.key], TVsItem.id) :
                        <span>{TVsItem[column.key]}</span>
                })
            }
        </div>
    </div>

}