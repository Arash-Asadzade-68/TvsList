import React from 'react';
import { ReactComponent as NoDataIcon } from "../../assets/images/icon-noData.svg";
import Styles from "../../assets/scss/styles.module.scss";

interface INoSearchResultProps {
  title?: string;
  info?: string;
}

export default function NoSearchResult({
  title,
  info
}: INoSearchResultProps) {
  return (
    <div className={Styles.noDataContainer}>
      <NoDataIcon />
      <p className={Styles.searchAgainTxt}>Empty search result</p>
    </div>
  )
}
