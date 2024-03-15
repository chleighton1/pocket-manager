"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Wine } from "./components/svg/wine-glass";
import { Collins } from "./components/svg/collins";
import { Rocks } from "./components/svg/rocks";
import { NickAndNora } from "./components/svg/nick-and-nora";
import { Coupe } from "./components/svg/coupe";
import data from "@/app/data/data.json";

export default function Home() {
  // const [cocktails, setCocktails] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("./data/data.json");
  //       const data = await response.json();
  //       setCocktails(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  console.log(data.cocktails);

  return (
    <div className="p-10">
      <Drink />
    </div>
  );
}

function Drink() {
  const [activeCard, setActiveCard] = useState(false);
  const glass = {
    wine: <Wine />,
    collins: <Collins />,
    rocks: <Rocks />,
    "nick and nora": <NickAndNora />,
    coupe: <Coupe />,
  };

  const handleFlip = () => {
    setActiveCard(!activeCard);
  };

  return (
    <div
      onClick={handleFlip}
      className={` text-dark-grey-blue bg-light-tan rounded-lg max-w-[300px] min-h-96 relative card shadow-xl ${
        activeCard ? "cardFlip" : ""
      }`}
    >
      <div className="front flex flex-col justify-around">
        <img
          src="/cocktails/Layfayette.jpeg"
          alt="Image of cocktail"
          className="rounded-t-lg"
        />
        <h1 className="font-bold text-2xl centered mt-6">Lafayette Place</h1>
      </div>

      <div className="back absolute p-8 top-0">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl centered mb-6">Lafayette Place</h1>
          {glass["nick and nora"]}
        </div>

        <div className="mb-4">
          <h3>
            <span className="font-bold mr-1">1.75oz</span> Batch
          </h3>
          <ul className="ml-6">
            <li>.75oz Citadelle gin</li>
            <li>.75oz St Germain</li>
            <li>.25oz Maraschino</li>
          </ul>
          <p>
            <span className="font-bold mr-1">.75oz</span> Lime
          </p>
          <p>
            <span className="font-bold mr-1">.75oz</span> Tart Cherry
          </p>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="mb-2">Garnish: Firestick</p>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}

// 			//  (1.75oz Batch)*
// .75oz Citadelle gin
// .75oz St Germain
// .25oz Maraschino
// .75oz Lime
// .5oz Tart Cherry
// Glass: Nick & Nora
// Garnish: Firestick
