// import React from 'react'
import React, {useState} from 'react'

function TextForm(props) {

    const handleUpClick = () => {
        // console.log("UpperCase was clicked");
        let newText;
        changeValue(value + 1);
        
        if (value % 2 === 0) {
            newText = text.toLowerCase();
            changeText('Convert to UpperCase');
            props.showalert("converted to LowerCase successfully", "success");
        }
        else {
            newText = text.toUpperCase();
            changeText('Convert to LowerCase');
            props.showalert("converted to UpperCase successfully", "success");
        }

        setText(newText);
       
    }


    const handleHindiClick = () => {
        props.showalert("successfully translated into hindi", "success");
    }
    
    function reverseString(str) {
       
        return str.split('').reverse().join('');
    }
    
    
    const handleReverseClick = () => {
        let newText = reverseString(text);
        setText(newText);
         props.showalert("successfully reversed", "success");
    }

    const handleEnglishClick = () => {
        let newText = '';
        setText(newText);
        props.showalert("successfully translated into English", "success");
    }


    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showalert("successfully clear all text", "success");
    }
      
    // handling event
    const handleOnChange = (event) => {
        // console.log("on change");
        // ab hm text area type kar sakenge aur jo type karenge vo set text me chala jayega jisse text ki vi value bhi change ho jayegi
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showalert("copeid to Clipboard", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("extra spaces removed", "success");
    }

    const [text, setText] = useState('enter text here');
    const [change, changeText] = useState('Convert to UpperCase');
    const [value, changeValue] = useState(1);
    // const [hindi, changeHValue] = useState('Convert to Hindi');
    // setText("hii kha ho");//correct way
    // text = "new text"; //wrong way


  return (
    <div>
          <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
  <div className="mb-3">
              {/* <label for="mybox" className="form-label">{props.title}</label> */}
              {/* <h1>{value}</h1> */}
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id='mybox' rows="10"></textarea>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  
 
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>{change}</button>
          <button className="btn btn-primary mx-1" onClick={handleHindiClick}>Convert into Hindi</button>
          <button className="btn btn-primary mx-1" onClick={handleEnglishClick}>Convert into English</button>
          <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse text</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>copy text</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra space</button>

          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>

          <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
              <h1>Your text summary</h1>
              <p>{text.split(" ").length-1} words and {text.length} characters</p>
              <p>{0.008 * text.split(" ").length} Minutes read</p>
              <h2>Preview</h2>
              <p>{text.length>0?text:"Enter somthing in the textbox to preview it here"}</p>
          </div>

    </div>
  )
}

export default TextForm
