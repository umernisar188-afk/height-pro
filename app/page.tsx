"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
export default function Home() {
  const [heightA, setHeightA] = useState("");
  const [heightB, setHeightB] = useState("");
  const [nameA, setNameA] = useState("");
const [nameB, setNameB] = useState("");
  const [difference, setDifference] = useState<number | null>(null);
  const [scoreA, setScoreA] = useState(0);
const [scoreB, setScoreB] = useState(0);
const [showVS, setShowVS] = useState(false);
const [animateBars, setAnimateBars] = useState(false);
const [history, setHistory] = useState<string[]>([]);
useEffect(() => {
  const savedHistory = localStorage.getItem("history");

  if (savedHistory) {
    setHistory(JSON.parse(savedHistory));
  }
}, []);
const cmToFeetInches = (cm: number) => {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  return `${feet}'${inches}"`;
};
const getPercentageDifference = () => {
  setAnimateBars(false);
setTimeout(() => {
  setAnimateBars(true);
}, 100);
  const a = Number(heightA);
  const b = Number(heightB);

  if (!a || !b) return 0;

  return ((Math.abs(a - b) / Math.min(a, b)) * 100).toFixed(1);
};
  const compareHeights = () => {
  const a = parseFloat(heightA);
  const b = parseFloat(heightB);

  if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid heights");
    return;
  }

  setShowVS(true);
setAnimateBars(false);
setTimeout(() => setAnimateBars(true), 50);
  const diff = Math.abs(a - b);
  setDifference(diff);

  let result = "";

  if (a > b) {
    setScoreA((prev) => prev + 1);
    result = `${nameA || "Person A"} (${a}) is taller than ${nameB || "Person B"} (${b})`;

  } else if (b > a) {
    setScoreB((prev) => prev + 1);
    result = `${nameB || "Person B"} (${b}) is taller than ${nameA || "Person A"} (${a})`;

  } else {
    result = "Both are equal";
  }

  setHistory((prev) => {
    const updated = [result, ...prev];
    localStorage.setItem("history", JSON.stringify(updated));
    return updated;
  });

  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });
};

  return (
    <main className="min-h-screen bg-white">
<section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-24">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-blue-700 text-sm font-medium mb-6">
            <div className="mt-10 text-center">
  <h3 className="text-lg font-semibold text-gray-700">
    Try Popular Comparisons
  </h3>

  <div className="mt-3 space-y-2 text-blue-600">
    <a href="/compare/170cm-vs-180cm" className="block underline">
      170cm vs 180cm
    </a>

    <a href="/compare/160cm-vs-190cm" className="block underline">
      160cm vs 190cm
    </a>

    <a href="/compare/150cm-vs-200cm" className="block underline">
      150cm vs 200cm
    </a>
  </div>
</div>
            📏 Height Pro
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Visual Height
            <span className="block text-blue-600">
              Comparison Tool
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            Compare heights side by side and instantly see the difference.
          </p>
        </div>

        <div className="mt-12 bg-white border border-gray-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Compare Heights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
  type="text"
  placeholder="Person A Name"
  value={nameA}
  onChange={(e) => setNameA(e.target.value)}
  className="w-full rounded-xl border border-gray-300 p-4 text-gray-900"
/>

<input
  type="text"
  placeholder="Person B Name"
  value={nameB}
  onChange={(e) => setNameB(e.target.value)}
  className="w-full rounded-xl border border-gray-300 p-4 text-gray-900"
/>
            <input
              type="number"
              placeholder="Person A Height (cm)"
              value={heightA}
              onChange={(e) => setHeightA(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-4 text-gray-900"
            />

            <input
              type="number"
              placeholder="Person B Height (cm)"
              value={heightB}
              onChange={(e) => setHeightB(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-4 text-gray-900"
            />
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

  <button
    onClick={() => {
      const text =
        Number(heightA) > Number(heightB)
          ? `${nameA || "Person A"} is ${heightA}cm vs ${nameB || "Person B"} ${heightB}cm`
          : `${nameB || "Person B"} is ${heightB}cm vs ${nameA || "Person A"} ${heightA}cm`;

      navigator.clipboard.writeText(text);
      alert("Copied to clipboard 🔗");
    }}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
  >
    Share Result 🔗
  </button>

  <button
    onClick={() => {
      setHeightA("");
      setHeightB("");
      setNameA("");
      setNameB("");
      setDifference(null);
      setShowVS(false);
      setAnimateBars(false);
    }}
    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold"
  >
    Clear All
  </button>

  <button
    onClick={compareHeights}
    className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    Compare Height
  </button>

</div>
{showVS && (
  <div className="text-center my-10 animate-[fadeIn_0.4s_ease-out] transform transition-all duration-500">
    
    <div className="text-5xl font-extrabold text-red-500 drop-shadow-lg animate-pulse">
      ⚔️ VS ⚔️
    </div>

    <div className="mt-2 text-xl font-bold text-gray-700 animate-[scaleIn_0.4s_ease-out]">
      <div className="mt-2 text-xl font-bold text-gray-700 transition-all duration-500">
  {nameA || "A"} <span className="text-red-500 animate-pulse">VS</span> {nameB || "B"}
</div>
    </div>

  </div>
)}
          {difference !== null && (
   <div className="mt-8 rounded-2xl bg-blue-50 p-6 border border-blue-200 shadow-xl transition-all duration-700 transform hover:scale-[1.02]">
   <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
  📊 Result
    </h3>

   <div className="text-center py-6 transform transition-all duration-700">
  <p className="text-sm uppercase tracking-wider text-gray-500">
    Height Difference
  </p>

  <p className="text-6xl font-extrabold text-blue-600 mt-2">
    {difference} cm
  </p>
</div>
<p className="text-lg text-gray-700 mt-4 mb-6">
  {Number(heightA) > Number(heightB)
  ? `${nameA || "Person A"} is taller by ${difference} cm`
  
  
  : Number(heightB) > Number(heightA)
  ? `${nameB || "Person B"} is taller by ${difference} cm`
  : "Both people are the same height"}
</p>

<div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-around mt-10 gap-10 px-4">
      {/* Person A */}
      <div className="flex flex-col items-center">   
        {Number(heightA) > Number(heightB) && (
  <div  className="mb-2 rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold animate-bounce shadow-lg ring-4 ring-yellow-200">
  🏆 Winner
</div>
)}


        <div
        className={`w-20 rounded-t-xl shadow-lg transition-all duration-500 ${
  Number(heightA) > Number(heightB)
    ? "bg-yellow-400 shadow-yellow-300"
    : "bg-blue-500 opacity-70"
}`}
      style={{
  height: animateBars ? `${Number(heightA) * 1.2}px` : "0px",
  transition: "height 700ms ease-out"
}}
        />
        <p className="mt-3 text-lg font-bold text-gray-800">
          {nameA || "Person A"} ({heightA} cm, {cmToFeetInches(Number(heightA))})
        </p>
      </div>

      {/* Person B */}
      <div className="flex flex-col items-center">
        {Number(heightB) > Number(heightA) && (
 <div className="mb-2 rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold animate-bounce shadow-lg ring-4 ring-yellow-200">
  🏆 Winner
</div>
)}
        <div
          className={`w-20 rounded-t-xl shadow-lg transition-all duration-500 ${
  Number(heightB) > Number(heightA)
    ? "bg-yellow-400 shadow-yellow-300"
    : "bg-green-500 opacity-70"
}`}
          style={{
  height: animateBars ? `${Number(heightB) * 1.2}px` : "0px",
  transition: "height 700ms ease-out"
}}
        />
        <p className="mt-3 text-lg font-bold text-gray-800">
  {nameB || "Person B"} ({heightB} cm, {cmToFeetInches(Number(heightB))})
</p>
      </div>
    </div>
    <div className="mt-10 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl shadow-lg">
  <h3 className="text-2xl font-bold text-yellow-700 mb-4">
  🏆 Leaderboard
</h3>
  <p>{nameA || "Person A"} Wins: {scoreA}</p>
  <p>{nameB || "Person B"} Wins: {scoreB}</p>

  <p className="mt-3 font-bold text-lg">
    {scoreA > scoreB
      ? `${nameA || "Person A"} is leading`
      : scoreB > scoreA
      ? `${nameB || "Person B"} is leading`
      : "It's a tie"}
  </p>
</div>
  </div>
)}
    </div>
{history.length > 0 && (
  <div className="mt-10 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl shadow-lg">
    <h3 className="text-2xl font-bold text-indigo-700 mb-4">
      📜 Comparison History
    </h3>
    <ul className="space-y-2">
      {history.map((item, index) => (
        <li key={index} className="text-gray-700">
          {item}
        </li>
      ))}
    </ul>
  </div>
)}

</section>
</main>
);
}