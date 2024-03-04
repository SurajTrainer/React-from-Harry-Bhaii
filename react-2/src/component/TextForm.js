import React,{useState} from 'react'



export default function TextForm(props) {
    
    const handleUpCase = () => {
            // console.log('text is in UpperCase');
            let upcase = text.toUpperCase();
            setText(upcase)
    }
    
    const handleLoCase = () => {
            // console.log('text is in UpperCase');
            let locase = text.toLowerCase();
            setText(locase)
    }
    
    const handleclearCase = () => {

            let clearcase = '';
            setText(clearcase)
    }
    
    const handleAddHmmCase = () => {

            let AddHmm = `${text} Hmm.`
            setText(AddHmm)
    }


    const handleAddCommaCase = () => {

            let AddComma = `${text} ,,`
            setText(AddComma)
    }
    

  
    
    const onchangeHandler = (event) => {
        // console.log('this is textarea value');
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text Here');
  return (
    <>
    <div className='container'  style={{backgroundColor : props.mode === 'light' ? 'white' : 'blue', color : props.mode === 'light' ? 'grey' : 'white'}} >
        <h1>{props.heading}</h1>
        {/* <h1>{props.heading} - {text}</h1> */}
       <div className="mb-3 my-3 container">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
      <textarea className="form-control" value={text}  onChange={onchangeHandler} style={{backgroundColor : props.mode === 'light' ? 'white' : 'blue', color : props.mode === 'light' ? 'grey' : 'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      
    <button className='btn btn-success my-3 mx-2' onClick={handleUpCase}> Convert to UpperCase</button>
    <button className='btn btn-success my-3 mx-2' onClick={handleLoCase}> Convert to UpperCase</button>

    {/* Excercise 1 */}
    <button className='btn btn-success my-3 mx-2' onClick={handleclearCase}> Convert to ClearCase</button>
    <button className='btn btn-success my-3 mx-2' onClick={handleAddHmmCase}> add Hmm in last</button>
    <button className='btn btn-success my-3 mx-2' onClick={handleAddCommaCase}> add , with words</button>

    </div>
      
      <div>
        <h1>Your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some value"}</p>
      </div>
    </div>

    </>
  )
}