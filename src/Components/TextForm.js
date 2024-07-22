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
    navigator.clipboard.writeText(text).then(() => {
      props.showAlert("Copied to Clipboard!", "success");
    })};
  const handleTexttoSpeech=()=>{
    navigator.clipboard.writeText(text).then(() => {
      const voices = window.speechSynthesis.getVoices();
      const maleVoice = voices.find(voice => voice.name.includes('Male'));
      const selectedVoice = maleVoice || voices[0];
      if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.voice = selectedVoice;
          window.speechSynthesis.speak(utterance);
      } else {
          props.showAlert("Speech synthesis is not supported in this browser.","warning");
      }
  })
  };
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success");
  };
  const handleButtonBackgroundColor = () => {
    if (document.body.classList.contains("bg-primary")) {
      return "success";
    } else {
      return "primary"; 
    }
  };
  const[text,setText]=useState("");
  return (
    <>
     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1 className='mb-4'>{props.heading}</h1>
          <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className={`btn btn-${handleButtonBackgroundColor()} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className={`btn btn-${handleButtonBackgroundColor()} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className={`btn btn-${handleButtonBackgroundColor()} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button disabled={text.length===0} className={`btn btn-${handleButtonBackgroundColor()} mx-1 my-1`} onClick={handleTexttoSpeech}>Text to Speech</button>
          <button disabled={text.length===0} className={`btn btn-${handleButtonBackgroundColor()} mx-1 my-1`} onClick={clearText}>Clear Text</button>
          <button disabled={text.length===0} className={`btn btn-${handleButtonBackgroundColor()} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
        </div>
   <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h2>Your text summary</h2>
   <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
   <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"Nothing to preview!"}</p>
   </div>
    </>
  )
}
