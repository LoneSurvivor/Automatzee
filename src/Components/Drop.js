import React from "react";
import Tesseract from "tesseract.js";
import './drop.css';
import jsPDF from 'jspdf'
var doc=new jsPDF('landscape','px','a4','false');
var si;

export default function Drop() {  
   
    const [image, setImage] = React.useState('');  
    const handleClick=()=>{
        
        Tesseract.recognize(
            image,
            'eng',
            { logger: m => {console.log(m);} }
          ).then(({ data: { text } }) => {
           console.log(text);
           si=text;
          });
        }
       
      const generatepdf=()=>{
          
         
          doc.text(si,10,10)
          doc.autoPrint();
          doc.output('dataurlnewwindow');
      }

let stt={
  position:"absolute",
  fontSize:"3.0vw",
  left:"45.0%",
  top:"2vh",
}

  return <div ><form method="post" action="#" id="#"> 
  <br></br><br></br><br></br>  
  <div className="form-group files"><br></br><br></br><center>   
     <label  style={stt}>Text Extractor </label><br></br><br></br>
    <div className="abc"><input type="file" 
     className="form-control"
     onChange={(e)=>setImage(URL.createObjectURL(e.target.files[0]))}
     multiple=""/></div></center>
    <div className="sub"><button 
    type="button" 
    className="btn btn-outline-dark"
    onClick={handleClick}
    >Submit</button></div>
    
    <div className="dow"><button 
    type="button" 
    className="btn btn-outline-dark"
    onClick={generatepdf}
    >Download</button></div>
    
  </div>
  

</form>
</div>
}