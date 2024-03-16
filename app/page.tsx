import data from "@/app/data/data.json";
import Drink from "./components/Drink";
import { promises as fs } from "fs";

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data = JSON.parse(file);

  type Batch = {
    [ingredient: string]: number;
  };

  type Other = {
    [ingredient: string]: number;
  };

  type Cocktail = {
    name: string;
    recipe: {
      batch: Batch;
      other: Other;
    };
    garnish: string;
    glass: string;
    img: string;
  };

  const drinks = data.map((drink: Cocktail) => {
    return (
      <Drink
        name={drink.name}
        recipe={drink.recipe}
        garnish={drink.garnish}
        glass={drink.glass}
        imagePath={drink.img}
      />
    );
  });

  return <div className="p-10 grid grid-cols-1 gap-2">{drinks}</div>;
}

// 			//  (1.75oz Batch)*
// .75oz Citadelle gin
// .75oz St Germain
// .25oz Maraschino
// .75oz Lime
// .5oz Tart Cherry
// Glass: Nick & Nora
// Garnish: Firestick
