import React, { useState } from "react";
import acImage from "../assets/ac2.png"; // ضع صورة التكييف هنا

const AirConditioner = () => {
  const [isOn, setIsOn] = useState(false);
  const [temperature, setTemperature] = useState(22);

  const togglePower = () => {
    setIsOn(!isOn);
  };

  const increaseTemp = () => {
    if (isOn && temperature < 26) setTemperature(temperature + 1);
  };

  const decreaseTemp = () => {
    if (isOn && temperature > 16) setTemperature(temperature - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-blue-100 to-blue-300">
      {/* صورة التكييف */}
      <div className="relative w-72 h-40 mb-10">
        <img
          src={acImage}
          alt="Air Conditioner"
          className={`w-full h-full object-contain transition-all duration-500 ${
            isOn ? "brightness-100" : "brightness-75"
          }`}
        />

        {/* الشاشة الصغيرة داخل التكييف */}
        <div className="absolute top-6 right-10 bg-black text-green-400 text-lg font-bold px-3 py-1 rounded-md">
          {isOn ? `${temperature}°C` : "--"}
        </div>

        {/* زر التشغيل على التكييف */}
        <div
          onClick={togglePower}
          className={`absolute bottom-4 left-10 w-6 h-6 rounded-full cursor-pointer border-2 transition-all ${
            isOn ? "bg-green-500 border-green-700" : "bg-red-500 border-red-700"
          }`}
        ></div>

        {/* تأثير الهواء الخارج من التكييف */}
        {isOn && (
          <div
            className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-24 h-20 bg-gradient-to-b from-blue-300/50 to-transparent animate-pulse blur-md"
            style={{ opacity: (26 - temperature) / 10 }}
          ></div>
        )}
      </div>

      {/* ريموت التحكم */}
      <div className="bg-gray-200 rounded-2xl p-6 shadow-xl w-60 flex flex-col items-center">
        {/* شاشة الريموت */}
        <div className="bg-black text-green-400 text-2xl font-bold w-32 text-center py-2 rounded-md mb-4">
          {isOn ? `${temperature}°C` : "--"}
        </div>

        {/* الأزرار */}
        <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default AirConditioner;
