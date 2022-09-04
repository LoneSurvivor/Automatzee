import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function trans() {
  let sty={
    position: "absolute",
    fontSize: "3.2vw",
    left:"42%",
    top: "15%"
  }
  let sty1={
    position: "absolute",
    width: "30%",
    left:"34%",
    top: "27%"
  }
  let st1={
    position: "absolute",
    left:"46.3%",
    top:"36.2%",
  }
 
  let sty2={
    position: "absolute",
    width: "30%",
    left:"34.1%",
    top:"43.1%",
  }
  
  let s1={
    position: "absolute",
    left:"46.8%",
    top:"51.7%",
  }
  let a1={
    fontSize: "20px"
  }
  
  const [inputText,setInputText]=useState('')
  const [resultText,setResultText]=useState('')
  const [selectedlangkey,setlangkey]=useState('')
  const [languagesList,setLanguagesList]=useState([])
  const [detectLanguageKey,setdetectedLanguagekey]=useState('')
  const getSource=()=>{
    axios.post('https://libretranslate.de/detect',{
     q: inputText
    })
    .then((response)=>{setdetectedLanguagekey(response.data[0].language)})
  }
  const translateText = () => {
    setResultText(inputText)

    getSource();

    let data = {
        q : inputText,
        source: detectLanguageKey,
        target: selectedlangkey
    }
    axios.post(`https://libretranslate.de/translate`, data)
    .then((response) => {
        setResultText(response.data.translatedText)
    })
}
  const langkey=(e)=>{setlangkey(e.target.value)}
  useEffect(() => {
   
      axios.get('https://libretranslate.de/languages')
      .then((response) => {setLanguagesList(response.data)})
    
    getSource()
  }, [inputText])
  return (
    
    <div>
    <div style={sty}>
      Translator
    </div>

<form >
  
    <div class="form-group">
    <label for="exampleFormControlTextarea1" style={a1}></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" style={sty1} placeholder="Enter Text"rows="1" onChange={(e) => setInputText(e.target.value)}></textarea>
  </div>
  <br></br> <br></br> <br></br> <br></br>

  
  <div style={st1}>
      <select className="langselect" onChange={langkey}>
        {languagesList.map((lang) => {
        return(<option value={lang.code}>{lang.name}</option>)})}
      </select>
    </div>
  
  <br></br><br></br><br></br><br></br><br></br>


<div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" style={sty2} placeholder="Result" rows="1" value={resultText}></textarea>
  </div>

  <div className="form-group" style={s1}>
    <button type="button"className="btn btn-outline-dark" onClick={translateText}>Translate</button>
    </div>


</form>
    
  







    </div>
    
  );
}
