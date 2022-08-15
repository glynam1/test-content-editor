import './App.css';
import { Button } from "@qualio/ui-components"
import * as React from "react";
import {QualioDocument} from "@qualio/qualio-content-editor/lib/model/document";
import {DocumentContentEditor} from "@qualio/qualio-content-editor";

export const App: React.FC = () => {
  const qualioDocument = {} as QualioDocument
  return (
    <>
      {/*<DocumentTitleEditor content={{title: ""}} handleAutoSave={() => {}} handleError={() => {}} handleTitleEditorReady={() => {}}/>*/}
      <div className="gray-container-inner gray-layout container">
        <Button>Test Button</Button>

        <DocumentContentEditor
          editorDocument={null}
          handleEditorReady={() => {}}
          handleAutoSave={() => {}}
          companyId={1}
        />
      </div>
    </>
  );
}
