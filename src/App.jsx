import React, { useState } from "react";
import { CurrentMood } from "./constant/data";

function App() {
  const [selectMood,setSelectMood] = useState(CurrentMood.Thankful.text)
  const [currentImg,setCurrentImg] = useState(CurrentMood.Thankful.bg)




  function handleMoodChange(e){
      const currentMood = e.target.value
      setSelectMood( CurrentMood[currentMood].text)
      setCurrentImg(CurrentMood[currentMood].bg)
}



  return <div className="banner-container" style={{ backgroundImage: `url('/${currentImg}')` }}>
    <h1 className="mood">{selectMood}</h1>
       <div className="mt-5 select-mood ">
        <label className="text-lg font-medium"> Select your currrent mood: </label>
        <select
          className="ml-2 p-2 border rounded-lg text-gray-700"
          onChange={handleMoodChange}
          value={selectMood}

        >
          {Object.keys(CurrentMood).map((m)=>(
            <option key={m} value={m}>
              {m}
            </option>

          ))}
          
        </select>
      </div>
  </div>;
}

export default App;
