import React, { useState } from 'react';



export default function TextForm(props) {
    const [text, setText] = useState('enter the text hear');
    // text="this is text";// this is worng way to set text
    // setText("this is set text");//correct way to set text

    const handleUpClick = ()=>{
        console.log("upper case was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
     }
     const handleUpChange=(event)=>{
        console.log("this is handle on change");
        setText(event.target.value);// hear we are able to append what ever the text was allready present
        // this is also nessary for typing
     }
  return (
    <div>
        
        <h4>{props.heading}</h4>
        <div className="mb-3">
            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea className="form-control" id="mybox" onChange={handleUpChange} value={text} rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
    </div>
  )
}
