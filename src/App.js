import './App.css';
import Markdown from 'marked-react';
import {React, useState} from 'react';
import { START } from './startertext';
function App() {

    const [edit, setEdit] = useState(START);
    const onChange = (e) => {
        setEdit(e.target.value);
    }
    return (
        <div id='wrapper' className='container'>
            <div className="row">
                <div className="col editor">
                    <textarea name="editor" id="editor"  rows={22} cols={50} onChange={onChange} value={edit}></textarea>
                </div>
                <div className="col preview">
                    <div className="preview" id="preview" >
                        <Markdown value={edit} className="line-break"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
