import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const [space,setSpace] = useState();

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        if(text.length===0){
            props.showAlert("Please enter some text to convert it to uppercase !!!","warning");
        }
        else{
            props.showAlert("Converted to Uppercase","success");
        }
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        if(text.length===0){
            props.showAlert("Please enter some text to convert it to lowercase !!!","warning");
        }
        else{
            props.showAlert("Converted to Lowercase","success");
        }
        setText(newText);
    }
    const spaceCount = () => {
        let s=0;
        for(let i=0;i<text.length;i++)
        {
            if(text[i]===" ")
            {
                s++;
            }
        }
        if(text.length===0){
            props.showAlert("Please enter some text to count spaces !!!","warning");
        }
        else{
            props.showAlert("All the spaces are counted","success");
        }
        setSpace(s);
    }
    const handleOnCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard!','success');
    }
    const handleClear = () => {
        if(text.length===0){
            props.showAlert("Textarea is already empty, please enter some text to clear it!!!","warning");
        }
        else{
            props.showAlert("Cleared","success");
        }
        setText('');
    }
    return (
        <>
            <div className='container' style={{color:props.mode==="dark"?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label for="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="dark"?'#13466e':'white',color:props.mode==="dark"?'white':'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={spaceCount} >Count Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnCopy} >Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear} >Clear</button>
            </div>
            <div className='container my-3' style={{color:props.mode==="dark"?'white':'black'}}>
                <h2>Text summary</h2>
                <p> Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Charectors :{text.length} </p>
                <p>Time to read text : {0.008 * (text.split(' ').filter((element)=>{return element.length!==0}).length)} min</p>
                <p>No of spaces : {space}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
