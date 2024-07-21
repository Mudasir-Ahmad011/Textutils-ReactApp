import React ,{useState} from 'react';

export default function TextForm(props) {
  const handleOnChange=(evt)=>{
    setText(evt.target.value);
  };
  const handleUpClick=()=>{
    let NewText=text.toUpperCase();
    setText(NewText);
    props.showAlert("Converted to Uppercase!","success");
  };
  const handleLoClick=()=>{
    let NewText=text.toLowerCase();
    setText(NewText);
    props.showAlert("Converted to Lowercase!","success");
  };
  const clearText=()=>{
    let NewText="";
    setText(NewText);
    props.showAlert("Text Cleared!","success");
  };
  const handleCopy=()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
  };
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success");
  };
  const[text,setText]=useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to Uppercase </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to Lowercase </button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearText}> Clear Text </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
    </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text above to preview it here."}</p>
    </div>
    </>
  )
}
