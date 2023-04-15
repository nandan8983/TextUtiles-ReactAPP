import React, {useState} from 'react'

export default function TextForm(props) {
const ToUpperCase = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!", "success")
}
const ToLowerCase = ()=>{
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to Lowercase!", "success")
}

const handleOnChange = (event) => {
  setText(event.target.value)
  
}
const clrarea = ()=>{
  props.showAlert("Text Area Is Cleared!", "success")
  setText("")
} 
const handleCopy = () => {
  console.log("I am copy");
  var text = document.getElementById("area"); 
  text.select();
  navigator.clipboard.writeText(text.value);
}

const [text , setText] = useState('');
  return (
    <><div className='container' style={ {color: props.mode === 'dark'?'white':'black'}}>
  <h1>{props.heading}</h1> 
    <div className="mb-3" >
      <textarea className="form-control" id="area" rows="5" value={text} onChange={handleOnChange} placeholder="Enter Text Here"/>
    </div>
    <button className='btn btn-primary ms-2' onClick={ToUpperCase}>Convert to UpperCase</button>
    <button className='btn btn-primary ms-2' onClick={ToLowerCase}>Convert to LowerCase</button>
    <button className='btn btn-primary ms-2' onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary ms-2' onClick={clrarea}>Clear</button>
  

</div>
<div className="container" style={ {color: props.mode === 'dark'?'white':'black'}}> 
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} Words and {text.length} Characters</p>
<br />
    <h4>Preview</h4>
    <p>{text.length>0?text:"Enter Somthing in the Above Box To See Preview"}</p>

</div>


</>

  )
}
  