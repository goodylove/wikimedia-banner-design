import React, { useEffect, useState } from "react";
import { CurrentMood } from "./constant/data";

function App() {
  const [selectMood,setSelectMood] = useState(CurrentMood.Thankful.text)
  const [currentImg,setCurrentImg] = useState(CurrentMood.Thankful.bg)
  const [animate,setAnimate] = useState(CurrentMood.Thankful.animation)
  const [value,setValue] = useState('Thankful')




  function handleMoodChange(e){
      const currentMood = e.target.value
      setSelectMood( CurrentMood[currentMood]?.text)
      setCurrentImg(CurrentMood[currentMood].bg)
      setAnimate(CurrentMood[currentMood].animation)
      setValue(currentMood)
}

console.log(selectMood)

  return <div className="banner-container" data-testid="banner" style={{ backgroundImage: `url('${currentImg}')` }}>
      <div className="mt-5 select-mood ">
        <h2 className="logo">Mood Day</h2>
       <div className="form">
         <label className="text-lg font-medium"> Select your currrent mood: </label>
        <select
          className="ml-2 p-2 border rounded-lg text-gray-700"
          onChange={handleMoodChange}
          value={value}

        >
          {Object.keys(CurrentMood).map((m)=>(
            <option key={m} value={m}>
              {m}
            </option>

          ))}
          
        </select>
       </div>
      </div>
  <div className="mood">
      <h1 className={` ${animate}`}>{selectMood}</h1>
  </div>
     
  </div>;
}

export default App;
