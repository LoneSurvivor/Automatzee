import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function SpeechRecog ()  {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const onSiteChanged=()=> {
    SpeechRecognition.startListening({ language: 'hi-IN'});
  }
  const onSiteChanged1=()=> {
    SpeechRecognition.startListening({ language: 'kn-IN'});
  }
  const onSiteChanged2=()=> {
    SpeechRecognition.startListening({ language: 'en-US'});
  }
  if (!browserSupportsSpeechRecognition) {
    return <span>This Browser doesn't support speech recognition.</span>;
  }
  let sr={
    position: "absolute",
    fontSize: "2.5vw",
    left:"43.5%",
    top: "151.0%"
  }
  let mp={
    position: "absolute",
    fontSize: "1.4vw",
    left:"47.2%",
    top: "159.0%"
  }
  let hin={
    position: "absolute",
    fontSize: "1.2vw",
    left:"49.9%",
    top: "164.0%"
  }
  let kan={
    position: "absolute",
    fontSize: "1.2vw",
    left:"49.9%",
    top: "167.1%"
  }
  let eng={
    position: "absolute",
    fontSize: "1.2vw",
    left:"49.9%",
    top: "170.1%"
  }
  let star={
    position: "absolute",
    left:"37.8%",
    top: "179.2%"
  }
  let sto={
    position: "absolute",
    left:"53.9%",
    top: "179.2%"
  }
  let ress={
    position: "absolute",
    left:"64.1%",
    top: "179.2%"
  }
  let ta={
    position: "absolute",   
    width: "30%",
    left:"41.1%",
    top: "191.4%"
  }

  return (
    <div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div style={sr}>Speech To Text</div>
      <div style={mp}>Microphone: {listening ? 'on' : 'off'}</div>
      

      
      
      <div class="form-check" style={hin}>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={onSiteChanged} />
  <label class="form-check-label" for="flexRadioDefault1">
    Hindi
  </label>
  
</div>
<div class="form-check" style={kan}>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"onChange={onSiteChanged1} />
  <label class="form-check-label" for="flexRadioDefault2">
    Kannada
  </label>
</div>
<div class="form-check" style={eng}>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"onChange={onSiteChanged2} />
  <label class="form-check-label" for="flexRadioDefault2">
    English
  </label>
</div>



<button style={star} className="btn btn-outline-dark" onClick={(e)=>{e.preventDefault(); SpeechRecognition.startListening({ continuous: true})}}>Start for more time</button>

      <button style={sto} className="btn btn-outline-dark" onClick={(e)=>{e.preventDefault();SpeechRecognition.stopListening({ continuous: true })}}>Stop</button>
      <button style={ress} className="btn btn-outline-dark" onClick={resetTranscript}>Reset</button>
      <textarea placeholder="Text of your speech "class="form-control" style={ta} value={transcript}></textarea><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}


