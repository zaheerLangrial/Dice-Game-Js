import React from "react";
import dices from "../assets/dices 1.jpg";
import { Link } from "react-router-dom";

function StartGame() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" max-w-6xl mx-auto flex">
        <div className=" w-1/2">
          <img src={dices} />
        </div>
        <div className=" flex flex-col justify-center">
          <h1 className=" text-8xl font-bold">DICE GAME</h1>
          <div className="flex justify-end">
            <Link to={"/playgame"}>
              {" "}
              <button className=" bg-black text-white py-1.5 px-10 rounded-md">
                Play Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartGame;
