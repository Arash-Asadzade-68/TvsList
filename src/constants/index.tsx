export const SearchItems = [
  {
      key: "seriesId",
      value: "Series",
  },
  {
      key: "screen",
      value: "Screen",
  },
  {
      key: "views",
      value: "Views",
  },
]
export enum SelectedFiltersType {
    screen = "screen",
    date = "date",
}
export const screenTypes = {
    mobile:false,
    tv:false,
    tablet:false,
    desktop:false
}
export const FilterItemsInitialState = {
    date:false,
    screen:false,
    mobile:false,
    tv:false,
    tablet:false,
    desktop:false,
    From:'',
    To:''
}