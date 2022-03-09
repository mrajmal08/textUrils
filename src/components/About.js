import React, { useState } from "react"

export default function About(props) {

//    const [myStyle, setMyStyle] = useState(
//         {
//             color: 'black',
//             backgroundColor: 'white'
//         }
//    )


   let myStyle = {
       color: props.mode == 'dark'? 'white': '#191834',
       backgroundColor: props.mode == 'dark'? '#191834': 'white',
   }

   

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils </strong> 
                  gives you a way to analize your text quicly and effeciantly, Be it word count, characcter count or 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Free to use
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils </strong> 
                    is a free chacter counter tool that provides a instant character count & word count statics for a given
                    text. TextUrils reports the number of words and character. Thus it is suitable for writing text with
                    words/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Browser compatible
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body" style={myStyle}>
                    This word  counter software works in any web browser such as chrome, firefox, internet explorer, safari , opera 
                    It suits to count character of facebook , blogs, books, excel documents, pdf document, essays etc.          
                </div>
            </div>
        </div>
       
    </div>
    </div>
  )
}
