import React from "react";
import Papa from "papaparse";

export function useCsvToJson() {
  const [rows, setRows] = React.useState<ITVsListRow[]>([]);
  React.useEffect(() => {
    Papa.parse("/view-data.csv", {
      download: true,
      header: true,
      skipEmptyLines:true,
      complete: (response) => {
        const {data}:any= response;
        setRows(data);
      }
    });
  }, []);

  return {
    rows
  }
}
