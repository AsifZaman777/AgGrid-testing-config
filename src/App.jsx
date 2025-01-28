import React, { useState, useEffect } from "react";
import "./App.css";
import Swal from "sweetalert2";


//#region AG grid config
// Importing ag-grid
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { themeBalham, themeQuartz,themeAlpine} from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

// Importing the data
import data from "./data.json";
import { snippet1, snippet2, snippet3, snippet4,snippet5 } from "./snippets";

// to use customTheme in an application, pass it to the theme grid option

//#region Theme Setup
const createTheme = (theme) => {
  return theme.withParams({
    backgroundColor: "#1f2836",
    browserColorScheme: "dark",
    chromeBackgroundColor: {
      ref: "foregroundColor",
      mix: 0.07,
      onto: "backgroundColor",
    },
    foregroundColor: "#FFF",
    headerFontSize: 14,
  });
};
//#endregion



const App = () => {
  const [userData, setUserData] = useState(data);
  const [customTheme, setCustomTheme] = useState(createTheme(themeQuartz));

  useEffect(() => {
    if (data) {
      setUserData(data);
    } else {
      console.error("Data not found");
    }
  }, []);

  const handleThemeChange = (e) => {
    switch (e.target.value) {
      case "themeQuartz":
        setCustomTheme(createTheme(themeQuartz));
        break;
      case "themeBalham":
        setCustomTheme(createTheme(themeBalham));
        break;
      case "themeAlpine":
        setCustomTheme(createTheme(themeAlpine));
        break;
      default:
        setCustomTheme(createTheme(themeBalham));
        break;
    }
  };


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
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };

  //#endregion

  //#region avoid snippet

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Swal.fire({
          title: "Copied to clipboard",
          icon: "success",
          timer: 1000,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Failed to copy",
          icon: "error",
          timer: 1000,
        });
      });
  };



  //#endregion

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          color: "Black",
        }}
      >
        <u>AG grid v33 testing and configuration</u>
      </h3>

      {/*
   add more info about the grid
   */}

      <div
        style={{
          height: 600,
          width: 1200,
          overflow: "hidden",
          alignContent: "center",
          margin: "auto",
          padding: "20px",
        }}
      >
         <div className="select-theme">
          <select name="" id="select-theme" onChange={handleThemeChange}>
            <option value="themeQuartz">Theme Quartz</option>
            <option value="themeBalham">Theme Balham</option>
            <option value="themeAlpine">Theme Alpine</option>
          </select>
        </div>
        <AgGridReact
          rowData={userData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={100}
          paginationPageSizeSelector={false}
          defaultColDef={defaultColDef}
          theme={customTheme}
        />
      </div>

      <h3
        style={{
          textAlign: "center",
          color: "blue",
        }}
      >
        V33 theme configuration
      </h3>

      <div className="snippet-container">
        <div className="snippet-box">
          <h4>
            <u>Import Necessary Modules</u>
          </h4>
          <textarea className="snippet-textarea" readOnly value={snippet1} />
          <button
            className="copy-button"
            onClick={() => copyToClipboard(snippet1)}
          >
            Copy
          </button>
        </div>
        <div className="snippet-box">
          <h4>
            <u>Register community or enterprise modules</u>
          </h4>
          <textarea className="snippet-textarea" readOnly value={snippet2} />
          <button
            className="copy-button"
            onClick={() => copyToClipboard(snippet2)}
          >
            Copy
          </button>
        </div>
        <div className="snippet-box">
          <h4>
            <u>Use module based custom themes [v33.0.4]</u>
          </h4>
          <textarea className="snippet-textarea" readOnly value={snippet3} />
          <button
            className="copy-button"
            onClick={() => copyToClipboard(snippet3)}
          >
            Copy
          </button>
        </div>
        <div className="snippet-box">
          <h4>
            <u>Declare column definations [dummy]</u>
          </h4>
          <textarea className="snippet-textarea" readOnly value={snippet4} />
          <button
            className="copy-button"
            onClick={() => copyToClipboard(snippet4)}
          >
            Copy
          </button>
        </div>

        <div className="snippet-box">
          <h4>
            <u>Use AG grid table</u>
          </h4>
          <textarea className="snippet-textarea" readOnly value={snippet5} />
          <button
            className="copy-button"
            onClick={() => copyToClipboard(snippet5)}
          >
            Copy 
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
