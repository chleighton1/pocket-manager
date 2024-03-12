import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10">
      <Drink />
    </div>
  );
}

function Drink() {
  return (
    <div className="bg-red-200 text-cyan-800">
      <h1>Lafayette Place</h1>
      <div>
        <h3>Batch</h3>
        <ul>
          <li>.75oz Citadelle gin</li>
          <li>.75oz St Germain</li>
          <li>.25oz Maraschino</li>
        </ul>
      </div>
      <p>.75oz Lime</p>
      <p>.75oz Tart Cherry</p>
      <p>Garnish: Firestick</p>
      <p>Glass: Nick & Nora</p>
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
