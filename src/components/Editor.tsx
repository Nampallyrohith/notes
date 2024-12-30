import "../index.css";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

//Import all Froala Editor plugins;
import "froala-editor/js/plugins.pkgd.min.js";
import React, { useState } from "react";

const Editor = () => {
  const [model, setModel] = useState("");
  
    const handleModelChange = (event: React.SetStateAction<string>) => {
      setModel(event);
    };
    let config = {
      charCounterCount: false,
      key: "AVB8B-21B4C3A2E1D2D1A17vC2ve1xhbH1qb1vC2wgheC3I3C7C8C4B4B3A3B2G2==",
  
      events: {
        contentChanged: function () {
          console.log("Test Events");
        }
      }
    };
    return (
      <div className="Editor">
        <FroalaEditorComponent
          tag="textarea"
          model={model}
          config={config}
          onModelChange={handleModelChange}
        />
        <hr />
        <h2 className="sec">Any Changes on the editor will be displayed below</h2>
        <FroalaEditorView model={model} />
      </div>
    );
  }
export default Editor
