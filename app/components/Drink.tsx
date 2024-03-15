"use client";

import { useState, useEffect } from "react";
import { Wine } from "@/app/components/svg/wine-glass";
import { Collins } from "@/app/components/svg/collins";
import { Rocks } from "@/app/components/svg/rocks";
import { NickAndNora } from "@/app/components/svg/nick-and-nora";
import { Coupe } from "@/app/components/svg/coupe";

type Batch = {
  [ingredient: string]: number;
};

type Other = {
  [ingredient: string]: number;
};

type DrinkProps = {
  name: string;
  recipe: {
    batch: Batch;
    other: Other;
  };
  garnish: string;
  glass: string;
  image: string;
};

export default function Drink({
  name,
  recipe,
  garnish,
  glass,
  imagePath,
}: any) {
  const [activeCard, setActiveCard] = useState(false);
  const glassType: any = {
    wine: <Wine />,
    collins: <Collins />,
    rocks: <Rocks />,
    "nick and nora": <NickAndNora />,
    coupe: <Coupe />,
  };

  const handleFlip = () => {
    setActiveCard(!activeCard);
  };

  let totalBatch = 0;
  let batchIngreds = [];
  let otherIngreds = [];

  for (const quantity of Object.values(recipe.batch)) {
    if (typeof quantity === "number") {
      totalBatch += quantity;
    }
  }

  for (const key of Object.keys(recipe.batch)) {
    batchIngreds.push(<li>{recipe.batch[key] + "oz " + key}</li>);
  }

  for (const key of Object.keys(recipe.other)) {
    otherIngreds.push(<span>{recipe.other[key] + "oz " + key}</span>);
  }

  return (
    <div
      onClick={handleFlip}
      className={` text-dark-grey-blue bg-light-tan rounded-lg max-w-[300px] min-h-96 relative card shadow-xl ${
        activeCard ? "cardFlip" : ""
      }`}
    >
      <div className="front flex flex-col justify-around">
        <img src={imagePath} alt="Image of cocktail" className="rounded-t-lg" />
        <h1 className="font-bold text-2xl centered mt-6">{name}</h1>
      </div>

      <div className="back absolute p-8 top-0">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl centered mb-6">{name}</h1>
          {glassType[glass]}
        </div>

        <div className="mb-4">
          <h3>
            <span className="font-bold mr-1">{totalBatch + "oz"}</span> Batch
          </h3>
          <ul className="ml-6">{batchIngreds}</ul>
          <div className="flex flex-col">{otherIngreds}</div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="mb-2">Garnish: {garnish}</p>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}
