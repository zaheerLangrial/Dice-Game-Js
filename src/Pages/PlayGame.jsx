import React, { useState } from "react";
import dice1 from "../assets/dice_1.jpg";
import dice2 from "../assets/dice_2.jpg";
import dice3 from "../assets/dice_3.jpg";
import dice4 from "../assets/dice_4.jpg";
import dice5 from "../assets/dice_5.jpg";
import dice6 from "../assets/dice_6.jpg";

function PlayGame() {
  const arr = [
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 2,
    },
    {
      id: 3,
      value: 3,
    },
    {
      id: 4,
      value: 4,
    },
    {
      id: 5,
      value: 5,
    },
    {
      id: 6,
      value: 6,
    },
  ];
  const dicesArr = [
    {
      id: 1,
      dice: dice1,
    },
    {
      id: 2,
      dice: dice2,
    },
    {
      id: 3,
      dice: dice3,
    },
    {
      id: 4,
      dice: dice4,
    },
    {
      id: 5,
      dice: dice5,
    },

    {
      id: 6,
      dice: dice6,
    },
  ];
  const [selectNum, setSelectNum] = useState();
  const [dice, setDeice] = useState(dice1);
  const [Score, setScoure] = useState(0);
  const [showRules, setShowRoles] = useState(false);

  const handleDice = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    let img = dicesArr.find((pic) => pic.id === randomNum);
    setDeice(img.dice);
    if (!selectNum) {
      alert("Please Select a Number.Thanks");
    } else if (selectNum === randomNum) {
      setScoure(Score + selectNum);
    } else {
      setScoure(Score - selectNum);
    }
  };
  const handleRestButton = () => {
    setScoure(0);
  };

  return (
    <div className=" w-full">
      <div className=" max-w-6xl mx-auto flex justify-between mt-10 h-fit">
        <div>
          <h1 className=" text-8xl">{Score}</h1>
          <h1 className="text-2xl">Total Score</h1>
        </div>
        <div className=" flex flex-col justify-between">
          <ul className=" flex space-x-3">
            {arr.map((num) => (
              <li
                onClick={() => setSelectNum(num.id)}
                key={num.id}
                className={`py-6 px-8 border-black border text-xl cursor-pointer ${
                  selectNum === num.id ? "bg-black text-white" : ""
                }`}
              >
                {num.value}
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <h2 className="text-2xl">Select Number</h2>
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-6xl flex flex-col justify-center items-center">
        <div>
          <img onClick={handleDice} src={dice} />
        </div>
        <h1 className="text-2xl">Click on Dice to roll</h1>
        <button
          onClick={handleRestButton}
          className=" bg-transparent border text-black text-base py-1.5 px-16 rounded-md mt-5"
        >
          Reset Score
        </button>
        <button
          onClick={() => setShowRoles(!showRules)}
          className=" bg-black text-white text-base py-1.5 px-16 rounded-md mt-5"
        >
          Show Rules
        </button>
      </div>
      <div
        className={`max-w-6xl mx-auto flex justify-center mt-10 ${
          showRules ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-center w-fit bg-[#FBF1F1] p-5">
          <h1 className="text-xl py-3">How to play dice game</h1>
          <p className="text-sm">Select any number</p>
          <p className="text-sm">Click on dice image</p>
          <p className="text-sm">
            After click on dice if selected number is equal to dice number you
            will <br /> get same point as dice
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlayGame;
