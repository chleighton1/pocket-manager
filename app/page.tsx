"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="p-10">
      <Drink />
    </div>
  );
}

function Drink() {
  const [activeCard, setActiveCard] = useState(false);

  const handleFlip = () => {
    setActiveCard(!activeCard);
  };

  return (
    <div
      onClick={handleFlip}
      className={` text-cyan-800 bg-red-200 w-24  rounded h-96 min-w-80 relative card ${
        activeCard ? "cardFlip" : ""
      }`}
    >
      <div className="front">
        <div>
          <Image
            src={"/cocktails/Layfayette.jpeg"}
            alt="Image of cocktail"
            className=""
            width={384}
            height={250}
          />
        </div>
        <h1 className="font-bold text-2xl centered mb-4">Lafayette Place</h1>
      </div>

      <div className="back absolute p-6 top-0 w-full h-full ">
        <h1 className="font-bold text-2xl centered mb-4">Lafayette Place</h1>

        <div className="mb-2">
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

        <p>Garnish: Firestick</p>
        <p>Glass: Nick & Nora</p>
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
