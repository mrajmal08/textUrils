import React, {useState} from 'react'


export default function TextForm(props) {

    //convert to upper letters
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to upper case', 'success')
    }

    //convert to lower letter
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);

        props.showAlert('Converted to lower case', 'success')
    }

    //clear all text
    const handleClearCick = () => {
        let newtext = "";
        setText(newtext);
    }

    //capital first letter
    const capitalFirstLetter = ()=>{
        let words = text.split(" ")
            let uppercaseword = ' '
            words.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
            });
        setText(uppercaseword)
    }

    //remove all the symbols
        const handletextExtract =()=>{
            const regex = /[0-9/A-Z/a-z/ /]/g;
            const letters = text.match(regex);
            const res1 = letters.join('');
            setText(res1)
        };


    //to extract only the numbers in the text:
    const handleNumExtract =()=>{

        const regex = /[0-9/ /]/g;
        const digits = text.match(regex);
        const res = digits.join('');
        setText(res)

        };

    //to copy text:
    const handleCopyText =()=>{
       let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Coppied to Clipboard', 'success')
        };

    //handle extra spaces
    const handleExtraSpaces =()=>{

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
 
         };


    const handleOnChange = (event) => {
        setText(event.target.value);

    }

const [text, setText] = useState('') 

  return (
    <>
    <div className="container" style={{ color: props.mode=='dark'? 'white': 'black' }}>
        <div className="mb-3">
            <h1 >{props.heading}</h1>
            <textarea className="form-control" style={{backgroundColor: props.mode=='dark'? 'grey': 'white', color: props.mode=='dark'? 'white': 'black'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary btn-sm mx-1" onClick={handleUpClick}>Convert to Upercase</button>
        <button className="btn btn-success btn-sm mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-info btn-sm mx-1" onClick={capitalFirstLetter}>Capital first Letter</button>
        <button className="btn btn-warning btn-sm mx-1" onClick={handleNumExtract}>extract all numbers</button>
        <button className="btn btn-secondary btn-sm mx-1" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-secondary btn-sm mx-1" onClick={handleExtraSpaces}>Hanlde Extra Spaces</button>
        <button className="btn btn-danger btn-sm mx-1" onClick={handleClearCick}>Clear Text</button>


        </div>
        <div className="container my-3" style={{ color: props.mode=='dark'? 'white': 'black' }}>
            <h2>Your Text Summary</h2>
                <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} Characters</p>
                <p>{0.008 *text.split(" ").length} per read</p>
            <h2>Preview</h2>
             <p>{text.length>0? text: "Enter something above textfeild to preview in it"}</p>
        </div>
    </>
  )
}
