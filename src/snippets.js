const snippet1 = `
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModules } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModules]);
import "ag-grid-community/styles/ag-theme-balham.css";`;

const snippet2 = `ModuleRegistry.registerModules([AllCommunityModule]);`;

const snippet3 = `
const customTheme = themeBalham.withParams({
  backgroundColor: "#1f2836",
  browserColorScheme: "dark",
  chromeBackgroundColor: {
    ref: "foregroundColor",
    mix: 0.07,
    onto: "backgroundColor",
  },
  foregroundColor: "#FFF",
  headerFontSize: 14,
});`;

const snippet4 = `
const columnDefs = [
    { headerName: "ID", field: "id", sortable: true, filter: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    {
        headerName: "Created at",
        field: "createdAt",
        sortable: true,
        filter: true,
    },
    { headerName: "Avatar", field: "avatar", sortable: true, filter: true },
    ];`;

const snippet5 = `
 <AgGridReact
          rowData={userData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={100}
          paginationPageSizeSelector={false}
          defaultColDef={defaultColDef}
          theme={customTheme}
/>`;



export { snippet1, snippet2, snippet3, snippet4,snippet5 };
