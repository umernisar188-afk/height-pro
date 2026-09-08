"use client";

import { useState } from "react";

export default function HeightRace({
  celebrityName,
  celebrityHeight,
}: {
  celebrityName: string;
  celebrityHeight: number;
}) {
  const [height, setHeight] = useState("");
  const [started, setStarted] = useState(false);

  const startRace = () => {
    const userHeight = Number(height);

    if (!userHeight || userHeight < 50 || userHeight > 300) {
      alert("Please enter a valid height between 50 and 300 cm.");
      return;
    }

    setStarted(true);
  };

  const userHeight = Number(height);

  const winner =
    userHeight > celebrityHeight
      ? "you"
      : celebrityHeight > userHeight
      ? "celebrity"
      : "tie";

  const maxHeight = Math.max(userHeight, celebrityHeight, 1);

  return (
    <section className="relative mt-12 overflow-hidden border-[5px] border-[#172033] bg-[#ffd43b] p-6 shadow-[10px_10px_0_#172033] sm:p-8">

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #172033 0px, #172033 2px, transparent 2px, transparent 16px)",
        }}
      />

      <div className="relative">

        <div className="inline-flex border-[3px] border-[#172033] bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#172033] shadow-[4px_4px_0_#172033]">
          🏁 Your Turn
        </div>

        <h2 className="mt-6 text-3xl font-black uppercase leading-tight text-[#172033] sm:text-4xl">
          Race Against
          <span className="block text-[#ff5a1f]">
            {celebrityName}
          </span>
        </h2>

        <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-[#172033]/70">
          Enter your height, hit the race button, and discover who takes the
          victory.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 border-[3px] border-[#172033] bg-[#b9ef35] px-4 py-3 font-black uppercase text-[#172033] shadow-[4px_4px_0_#172033]">
          <span className="text-xl">📏</span>
          <span>
            {celebrityName}: {celebrityHeight} CM
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row">

          <div className="relative flex-1">
            <input
              type="number"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
                setStarted(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  startRace();
                }
              }}
              placeholder="Enter your height"
              min="50"
              max="300"
              className="w-full border-[4px] border-[#172033] bg-white px-5 py-5 pr-16 text-lg font-black text-[#172033] shadow-[5px_5px_0_#ff8c2a] outline-none transition placeholder:text-[#172033]/30 focus:-translate-y-1"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 border-l-[3px] border-[#172033] pl-3 font-black text-[#ff5a1f]">
              CM
            </span>
          </div>

          <button
            onClick={startRace}
            className="group border-[4px] border-[#172033] bg-[#ff5a1f] px-8 py-5 font-black uppercase text-white shadow-[6px_6px_0_#172033] transition hover:-translate-y-1 hover:bg-[#b9ef35] hover:text-[#172033] hover:text-[#172033]"
          >
            Start Race
            <span className="ml-2">🏁</span>
          </button>

        </div>

        {!started && (
          <p className="mt-5 text-sm font-black uppercase tracking-wider text-[#172033]/60">
            Enter your height to reveal the race lanes.
          </p>
        )}

        {started && (
          <div className="mt-12 border-[4px] border-[#172033] bg-[#fffdf8] p-6 sm:p-8">

            <div className="mb-8 text-center">
              <p className="font-black uppercase tracking-[0.25em] text-[#ff5a1f]">
                Visual Height Race
              </p>

              <h3 className="mt-2 text-3xl font-black uppercase text-[#172033]">
                {winner === "you"
                  ? "You Take The Win 🏆"
                  : winner === "celebrity"
                  ? `${celebrityName} Takes The Win 🏆`
                  : "Perfect Tie 🤝"}
              </h3>

              <p className="mt-3 font-bold text-[#172033]/60">
                Difference: {Math.abs(userHeight - celebrityHeight)} CM
              </p>
            </div>

            <div className="grid grid-cols-2 items-end gap-8 border-b-[5px] border-dashed border-[#172033] pb-6 sm:gap-16">

              <div className="flex flex-col items-center">

                {winner === "you" && (
                  <div className="mb-3 text-3xl">🏆</div>
                )}

                <div
                  className={`w-20 border-[4px] border-[#172033] sm:w-28 ${
                    winner === "you"
                      ? "bg-[#b9ef35]"
                      : "bg-[#ff8c2a]"
                  }`}
                  style={{
                    height: `${Math.max(
                      (userHeight / maxHeight) * 230,
                      30
                    )}px`,
                  }}
                />

                <p className="mt-4 text-center font-black uppercase text-[#172033]">
                  You
                  <br />
                  {userHeight} CM
                </p>
              </div>

              <div className="flex flex-col items-center">

                {winner === "celebrity" && (
                  <div className="mb-3 text-3xl">🏆</div>
                )}

                <div
                  className={`w-20 border-[4px] border-[#172033] sm:w-28 ${
                    winner === "celebrity"
                      ? "bg-[#b9ef35]"
                      : "bg-[#ff8c2a]"
                  }`}
                  style={{
                    height: `${Math.max(
                      (celebrityHeight / maxHeight) * 230,
                      30
                    )}px`,
                  }}
                />

                <p className="mt-4 max-w-[150px] text-center font-black uppercase text-[#172033]">
                  {celebrityName}
                  <br />
                  {celebrityHeight} CM
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}