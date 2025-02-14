import "~style.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";

import Editor from "~components/Editor";
import Output from "~components/Output";
import SideBar from "~components/Sidebar";
import Toolbar from "~components/Toolbar";
import Split from "react-split";

function index() {
  return (
    <div>
      <div className="max-w-screen h-screen max-h-screen w-screen overflow-hidden bg-white">
        <div className="flex h-full w-full">
          <SideBar />
          <div className="relative flex h-full flex-1 flex-col overflow-hidden">
            <Split
              className="split h-full"
              direction="vertical"
              minSize={0}
              snapOffset={10}
              gutterSize={5}
              gutterAlign="start"
              dragInterval={1}>
              <div>
                <Toolbar />
                <Editor />
              </div>
              <div className="relative z-40">
                <Output />
              </div>
            </Split>
          </div>
        </div>
      </div>
    </div>
  );
}
export default index;
