"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeightRace({
  celebrityName,
  celebrityHeight,
}: {
  celebrityName: string;
  celebrityHeight: number;
}) {
  const [height, setHeight] = useState("");
  const router = useRouter();

  const startRace = () => {
    const userHeight = Number(height);

    if (!userHeight || userHeight < 50 || userHeight > 300) {
      alert("Please enter a valid height between 50 and 300 cm.");
      return;
    }

    router.push(
      `/compare/${userHeight}cm-vs-${celebrityHeight}cm?name=${encodeURIComponent(
        celebrityName
      )}`
    );
  };

  return (
    <section className="relative mt-12 overflow-hidden border-[5px] border-[#172033] bg-[#ffd43b] p-6 shadow-[10px_10px_0_#172033] sm:p-8">
      
      {/* BACKGROUND TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #172033 0px, #172033 2px, transparent 2px, transparent 16px)",
        }}
      />

      {/* DECORATIVE SHAPES */}
      <div className="pointer-events-none absolute -right-6 -top-10 text-9xl font-black text-[#ff5a1f]/20">
        +
      </div>

      <div className="pointer-events-none absolute bottom-3 right-8 text-5xl font-black text-[#172033]/10">
        ✦
      </div>

      <div className="relative">

        {/* LABEL */}
        <div className="inline-flex border-[3px] border-[#172033] bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#172033] shadow-[4px_4px_0_#172033]">
          🏁 Your Turn
        </div>

        {/* TITLE */}
        <h2 className="mt-6 text-3xl font-black uppercase leading-tight text-[#172033] sm:text-4xl">
          Race Against
          <span className="block text-[#ff5a1f]">
            {celebrityName}
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-[#172033]/70">
          Enter your height, hit the race button, and discover who takes the
          victory in this height showdown.
        </p>

        {/* RACE INFO */}
        <div className="mt-6 inline-flex items-center gap-3 border-[3px] border-[#172033] bg-[#b9ef35] px-4 py-3 font-black uppercase text-[#172033] shadow-[4px_4px_0_#172033]">
          <span className="text-xl">📏</span>

          <span>
            Champion Height: {celebrityHeight} CM
          </span>
        </div>

        {/* INPUT + BUTTON */}
        <div className="mt-8 flex flex-col gap-5 sm:flex-row">

          {/* INPUT */}
          <div className="relative flex-1">

            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  startRace();
                }
              }}
              placeholder="Enter your height"
              min="50"
              max="300"
              className="w-full border-[4px] border-[#172033] bg-white px-5 py-5 pr-16 text-lg font-black text-[#172033] shadow-[5px_5px_0_#ff8c2a] outline-none transition placeholder:text-[#172033]/30 focus:-translate-y-1 focus:bg-[#fffdf8]"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 border-l-[3px] border-[#172033] pl-3 font-black text-[#ff5a1f]">
              CM
            </span>

          </div>

          {/* BUTTON */}
          <button
            onClick={startRace}
            className="group border-[4px] border-[#172033] bg-[#ff5a1f] px-8 py-5 font-black uppercase text-white shadow-[6px_6px_0_#172033] transition duration-200 hover:-translate-y-1 hover:bg-[#b9ef35] hover:text-[#172033] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Start Race
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              🏁
            </span>
          </button>

        </div>

        {/* FOOTNOTE */}
        <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#172033]/50">
          Enter a height between 50 CM and 300 CM
        </p>

      </div>
    </section>
  );
}