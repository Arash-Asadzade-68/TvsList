declare interface ITVsListRow {[key: string]: string,seriesId: string, date: string, screen: string, views: string}
declare interface IColumn<T> {
  /**Header label */
  label: string;
  /**Object key to display value */
  key: string;
  /** Optionally transforms cell content into a custom component*/
  componentTransform?: (value: T, key?: string) => React.ReactFragment;
}
declare interface IEmptyMessages {
  title?: string;
  info?: string;
}

declare interface ITVsListState {
  filterState: IFilterState;
  filterCount: number;
  searchTerm: string;
  searchState: ITVsListSearchState;
  isOpen:boolean;
};

declare interface IFilterState {
  [key: string]: boolean|string;
  screen:boolean;
  date:boolean;
  mobile:boolean,
  tv:boolean,
  tablet:boolean,
  desktop:boolean
  From:string;
  To:string;
}
declare type filtersObject = Record<string, boolean>;