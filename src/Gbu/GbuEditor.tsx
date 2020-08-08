import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '@material-ui/core/Button';
import ReactHtmlParser from 'react-html-parser';
import '../App.css';

const GbuEditor = ({ addGbu }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    addGbu(value);
  };

  return (
    <div
      style={{
        margin: 'auto',
        width: '60%',
        padding: '50px',
      }}
    >
      <h3></h3>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Please Enter your GBU</p>"
        onInit={(editor: any) => {
          // You can store the "editor" and use when it is needed.
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          setValue(ReactHtmlParser(data));
        }}
        height="200px"
      />

      <div style={{ paddingTop: '10px ' }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {value}
    </div>
  );
};
export default GbuEditor;
