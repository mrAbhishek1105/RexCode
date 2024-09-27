// import React from 'react';
import Editor from "@monaco-editor/react";
import Axios from "axios";
import { useState } from "react";
import Select from "react-select";
import "./EditorBox.css";


function EditorBox() {
    const [userCode, setUserCode] = useState("");
    const [userInput, setUserInput] = useState("");
    console.log(userInput);
    const [userOutput, setUserOutput] = useState("");
    const [userTheme, setUserTheme] = useState("vs-dark");
    const [fontSize, setFontSize] = useState(20);

    const [userLang, setUserLang] = useState("python");

    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
    ];
    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ]
    const options = {
        fontSize: fontSize};

    function compile(){
        if (userCode === "") {
          alert("Please enter some code to run");
          return;
        }

        Axios.post(`http://localhost:8000/compile`, {
            code: userCode,
            language: userLang,
            input: userInput,
            })
            .then((response) => {
                console.log(response.data);
                setUserOutput(response.data.output);
            })
            .catch((err) => {
                console.log(err);
                setUserOutput("Error occurred while compiling the code" + (err.response ? ": " + err.response.data.error : "")
                );
        })
      }

    function clearOutput() {
        setUserOutput("");
    }
    function clearInput() {
        setUserInput("");
    }

  return (
    <div className="box">
      <div className="left-box">

      <div className="settings">
      <Select className="selector" options={languages} value={userLang}
                onChange={(e) => setUserLang(e.value)}
                placeholder={userLang} />
            <Select className="selector" options={themes} value={userTheme}
                onChange={(e) => setUserTheme(e.value)}
                placeholder={userTheme} />
            <label>Font Size</label>
            <input type="range" min="18" max="30"
                value={fontSize} step="2"
                onChange={(e) => { setFontSize(e.target.value) }} />

        <button className="btn btn-primary" onClick={compile}>Run</button>
      </div>
        <Editor
        options={options}
        height="calc(100vh - 50px)"
        width="50vw"
        theme={userTheme}
        language={userLang}
        defaultLanguage="python"
        defaultValue="# Enter your code here"
        onChange={(value) => { setUserCode(value) }}
        />
      </div>
        <div className="right-box">

        <div className="outputBox">
            <div className="outputT">
            <p>Output</p>
            <button className="btn btn-primary" onClick={clearOutput}>Clear</button>
            </div>
            <textarea className="outputContent"
            value={userOutput} placeholder="Output will be displayed here" readOnly></textarea>
        </div>


        <div className="inputBox">
            <div className="inputT">
            <p>Input</p>
            <button className="btn btn-primary" onClick={()=>{clearInput()}}>Clear</button>
            </div>

            <textarea id="input-box" className="inputContent" placeholder="Enter your input here" 
            value={userInput} onChange={(e)=>setUserInput(e.target.value)}></textarea>

        </div>
        </div>
    </div>
  );
}

export default EditorBox;