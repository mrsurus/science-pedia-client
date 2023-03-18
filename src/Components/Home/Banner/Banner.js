import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="">
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/12733057/pexels-photo-12733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute top-1/4 left-16 md:top-32 md:left-40 mx-auto md:w-96">
          <h1 className="text-5xl font-bold  text-violet-600">Welcome to Sciencepedia!</h1>
          <p className="text-md text-white my-4">Want to know about scince and technology? This is the website where you can find all the answer of your question and can aquire knowledge about science and technology. </p>
          <Link to='/about'><button className="btn btn-primary mt-4">Learn More</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;