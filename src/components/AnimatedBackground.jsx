import React from "react";
// import "../index.css"; 

const AnimatedBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white text-3xl font-bold">
   
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-black via-purple-900 via-blue-900 to-black"></div>
      <h1 className="relative z-10"> Fondo Oscuro </h1>
    </div>
  );
};

export default AnimatedBackground;
