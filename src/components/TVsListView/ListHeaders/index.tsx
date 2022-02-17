import React from "react";
import {SortType} from "../../../container/TvsListContainer"
import Styles from "../../../assets/scss/styles.module.scss"
export function ListHeaders({
    label,
    fieldName,
    sortList
}:{label:string,fieldName:string,sortList:(fieldName:string,type:string)=>void}) {
    return <div className={Styles.headerContainer}>
        <span key={`label-${label}`}>{label}</span>
        <div className={Styles.sortHandlers} >
        <div className={Styles.arrowUp}  onClick={()=>sortList(fieldName,SortType.Asc)} data-component-name="Asc">
        </div>
        <div className={Styles.arrowDown} onClick={()=>sortList(fieldName,SortType.Desc)} data-component-name="Desc">
        </div >
        </div>
    </div>
}