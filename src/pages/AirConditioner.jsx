import { Link } from "react-router-dom";
import { useState } from "react"
import Home from "./HomePage";

export default function AirConditioner(){
  const [isOn, setPower] = useState(true);
  const [temperature,setTemp] = useState(16);

  const togglePower = () => {
    setPower(!isOn);
  }

  const increaseTemp = () => {
    if(isOn && temperature < 26){
      setTemp(temperature + 1);
    }

  }

  const decreaseTemp = () => {
     if(isOn && temperature > 16 ){
      setTemp(temperature - 1);
     }
  }
  return(
    <>
    
    <section className="navLinks w-full mt-2 h-[10vh] bg-gray-600 text-white flex justify-center items-center gap-4">
      <Link to='/home'>Home</Link>
      <Link to='/fan'>Fan</Link>
    </section>
    <section className="airConditioner w-full  h-dvh flex flex-col justify-center items-center bg-linear-to-b from-blue-100 to-blue-300 gap-37">
      <figure className="bg-[url(./assets/ac2.png)] w-[90%] lg:w-[330px]  h-[200px] bg-cover flex items-center justify-end">
         <div className={`relative top-15 lg:top-20 left-5 lg:left-7 w-4 h-4  ${!isOn ? 'bg-red-400 rounded-full border-2 border-red-600' : 'bg-green-400 rounded-full border-2 border-green-700'} `}></div>
         <div className="relative top-8 lg:top-12 right-4 lg:right-3 bg-black text-green-400 text-lg font-bold px-3 py-1 rounded-md">{isOn? `${temperature}°C` : "--"}</div>
      </figure>

      <div className="remoteControl w-60 flex flex-col justify-center items-center bg-white border-16">
        <section className="remoteScreen bg-black text-green-400 text-2xl font-bold w-32 text-center py-2 rounded-md mb-4">
            {isOn ? `${temperature}°C` : "--"}
        </section>

        <section className="controlButtons flex gap-4">
          <button
            onClick={togglePower}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Power
          </button>
          <button
            onClick={increaseTemp}
            className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
          >
            +
          </button>
          <button
            onClick={decreaseTemp}
            className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
          >
            –
          </button>

        </section>

      </div>

    </section>
    </>
  )
}