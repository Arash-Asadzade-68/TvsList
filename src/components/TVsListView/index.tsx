import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import Skeleton from 'react-loading-skeleton';
import Styles from "../../assets/scss/styles.module.scss";
import NoSearchResult from "../NoSearchResult";
import { TVsListItem } from "./TVsListItem";

interface ITVsListViewProps {
    TVsList: ITVsListRow[];
    columns: IColumn<string>[];
    emptyMessageObject?: IEmptyMessages;
    isLoading:boolean;
}


//pass through the list component
export default function TVsListView({
    TVsList,
    columns,
    emptyMessageObject,
    isLoading
}: ITVsListViewProps) {
    const [windowHeight] = useState(calculateListHeight());
    function Row({ index, style }: any) {
        return (
            <div style={style} key={index} data-component-name="TVsList">
                <TVsListItem TVsItem={TVsList[index]}
                columns={columns} />
            </div>
        )
    }
    return TVsList.length > 0 ? <div className={Styles.listWrapper}>
        <List height={windowHeight}
            itemCount={TVsList.length}
            itemSize={window.innerWidth>450 ? 60 : window.innerWidth>320?100:120}
            width={"100%"}
            style={{
                paddingBottom: "3.5rem",
                overflow: "auto",
            }}
        >
            {Row}
        </List>
    </div> : isLoading ? <Skeleton count={10} /> : <NoSearchResult {...emptyMessageObject} />
}

/**calculates the list height */
function calculateListHeight() {
    const windowheight = window.innerHeight - 125;
    return windowheight;
}