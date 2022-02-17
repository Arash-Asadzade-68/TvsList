import React from 'react';
import Styles from "../../../assets/scss/styles.module.scss";
import { toLocalDate} from '../../../utils/TimeConversion';

export const columns: IColumn<any>[] =
    [
        {
            label: "Series", key: "seriesId",
            componentTransform: (seriesId) => {
                return <span key={Math.random()} className={Styles.screenId} >
                    {seriesId}
                </span>
            }
        },
        {
            label: "Date", key: "date",
            componentTransform: (date) => {
                return <span key={Math.random()} className={Styles.listFields} >
                    {toLocalDate(date)}
                </span>
            }
        },
        {
            label: "Screen", key: "screen",
            componentTransform: (screen) => {
                return <span key={Math.random()} className={Styles.listFields} >
                    {screen}
                </span>
            }
        },
        {
            label: "Views", key: "views",
            componentTransform: (views) => {
                return <span key={Math.random()} className={Styles.listFields}>{views}</span>
            }
        },
    ]