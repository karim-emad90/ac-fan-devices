import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import fanWingImg from "../assets/fan-wing.png";

export default function Fan() {
  const [fanInitialState, initialState] = useState(false);
  const [fanSpeed, setSpeed] = useState(0);

  const increaseSpeed = () => {
    if (fanInitialState) {
      setSpeed(fanSpeed + 1);
      if (fanSpeed >= 3) {
        setSpeed(3);
      }
    }
  };

  const decreaseSpeed = () => {
    if (fanSpeed >= 1) {
      setSpeed(fanSpeed - 1);
    }

    if (fanSpeed == 1) {
      setSpeed(1);
    }
  };

  const toggleStatus = () => {
    initialState(!fanInitialState);
    if (fanSpeed > 0 && fanInitialState) {
      setSpeed(0);
    }
  };

  return (
    <>
    <section className="navLinks w-full h-10vh conatiner flex justify-center gap-6 ">
        <Link to="/home">Home Page</Link>
        <Link to="/ac">Go To Air Conditioner</Link>
      </section>
    <section className="fan w-full h-dvh bg-blue-600 flex flex-col justify-center items-center">
      
      <img
        src={fanWingImg}
        alt=""
        className={`w-40 h-40 mb-8 transition-transform duration-200 ${
          fanInitialState && fanSpeed > 0 ? "animate-spin" : ""
        }`}
        style={{
          animationDuration: `${2 / (fanSpeed || 1)}s`,
        }}
      />

      <h2 className="text-xl font-bold mb-2 text-white">تحكم في المروحة 🌀</h2>
      <h4 className="text-shadow-gray-700 text-2xl font-semibold">
        السرعة: {fanSpeed}
      </h4>

      <div className="fanButtons w-full h-[20%] flex justify-center items-center gap-2">
        <button className="btn btn-active btn-error text-4xl" onClick={decreaseSpeed}>
          -
        </button>

        <button
          onClick={toggleStatus}
          className={`px-6 py-3 rounded-full font-bold text-white transition ${
            fanInitialState ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {fanInitialState ? "إيقاف التشغيل" : "تشغيل المروحة"}
        </button>

        <button className="btn btn-active btn-success text-3xl" onClick={increaseSpeed}>
          +
        </button>
      </div>
    </section>
    </>
  );
}
