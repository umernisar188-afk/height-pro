"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import confetti from "canvas-confetti";

function Home() {
  const searchParams = useSearchParams();

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

  const [isComparing, setIsComparing] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);

 useEffect(() => {
  try {
    const savedHistory = localStorage.getItem("history");

    if (savedHistory) {
      const parsedHistory = JSON.parse(savedHistory);

      if (Array.isArray(parsedHistory)) {
        setHistory(parsedHistory);
      }
    }
  } catch {
    localStorage.removeItem("history");
  }
}, []);
useEffect(() => {
  const urlHeightA = searchParams.get("heightA");
  const urlHeightB = searchParams.get("heightB");
  const urlNameB = searchParams.get("nameB");

  if (urlHeightB) {
    setHeightB(urlHeightB);
    setNameB(urlNameB || "Person B");
  }

  if (urlHeightA) {
    setHeightA(urlHeightA);
    setNameA("You");
  }

  if (urlHeightA && urlHeightB) {
    const a = Number(urlHeightA);
    const b = Number(urlHeightB);

    setDifference(Math.abs(a - b));
    setShowVS(true);
    setAnimateBars(true);
    setResultVisible(true);
  }
}, [searchParams]);
const cmToFeetInches = (cm: number) => {
  if (!cm || cm <= 0) return "";

  const totalInches = Math.round(cm / 2.54);

  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;

  return `${feet}'${inches}"`;
};

  const compareHeights = () => {
    const a = parseFloat(heightA);
    const b = parseFloat(heightB);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      alert("Please enter valid heights");
      return;
    }

    setIsComparing(true);
    setResultVisible(false);
    setShowVS(true);
    setAnimateBars(false);

    const diff = Math.abs(a - b);

    setTimeout(() => {
      setDifference(diff);
      setAnimateBars(true);
      setResultVisible(true);
      setIsComparing(false);
    }, 900);

    let result = "";

    if (a > b) {
      setScoreA((prev) => prev + 1);

      result = `${nameA || "Person A"} (${a}cm) is taller than ${
        nameB || "Person B"
      } (${b}cm)`;
    } else if (b > a) {
      setScoreB((prev) => prev + 1);

      result = `${nameB || "Person B"} (${b}cm) is taller than ${
        nameA || "Person A"
      } (${a}cm)`;
    } else {
      result = "Both competitors are exactly the same height";
    }

    setHistory((prev) => {
      const updated = [result, ...prev].slice(0, 8);
      localStorage.setItem("history", JSON.stringify(updated));
      return updated;
    });

    setTimeout(() => {
      confetti({
        particleCount: 180,
        spread: 110,
        origin: { y: 0.55 },
      });
    }, 850);

    setTimeout(() => {
      document.getElementById("result-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 1000);
  };

  const compareWithCelebrity = (
    celebrityName: string,
    celebrityHeight: number
  ) => {
    const userHeight = parseFloat(heightA);

    if (isNaN(userHeight) || userHeight <= 0) {
      alert("Enter your height first, then choose a celebrity to race against 🏁");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const userName = nameA || "You";

    setNameB(celebrityName);
    setHeightB(String(celebrityHeight));

    setShowVS(true);
    setAnimateBars(false);

    setTimeout(() => {
      setDifference(Math.abs(userHeight - celebrityHeight));
      setAnimateBars(true);
      setResultVisible(true);
    }, 200);

    let result = "";

    if (userHeight > celebrityHeight) {
      setScoreA((prev) => prev + 1);

      result = `${userName} (${userHeight}cm) is taller than ${celebrityName} (${celebrityHeight}cm)`;
    } else if (celebrityHeight > userHeight) {
      setScoreB((prev) => prev + 1);

      result = `${celebrityName} (${celebrityHeight}cm) is taller than ${userName} (${userHeight}cm)`;
    } else {
      result = `${userName} and ${celebrityName} are exactly the same height`;
    }

    setHistory((prev) => {
      const updated = [result, ...prev].slice(0, 8);

      localStorage.setItem("history", JSON.stringify(updated));

      return updated;
    });

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.55 },
    });

    setTimeout(() => {
      document.getElementById("result-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };
const clearAll = () => {
  setHeightA("");
  setHeightB("");
  setNameA("");
  setNameB("");

  setDifference(null);

  setScoreA(0);
  setScoreB(0);

  setShowVS(false);
  setAnimateBars(false);
  setResultVisible(false);
  setIsComparing(false);

  setHistory([]);
  localStorage.removeItem("history");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  const shareResult = () => {
    if (!heightA || !heightB) {
      alert("Compare two heights first");
      return;
    }

    const text =
      Number(heightA) > Number(heightB)
        ? `${nameA || "Person A"} is ${heightA}cm vs ${
            nameB || "Person B"
          } ${heightB}cm`
        : Number(heightB) > Number(heightA)
        ? `${nameB || "Person B"} is ${heightB}cm vs ${
            nameA || "Person A"
          } ${heightA}cm`
        : `${nameA || "Person A"} and ${
            nameB || "Person B"
          } are both ${heightA}cm`;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Result copied to clipboard 🔗");
      })
      .catch(() => {
        alert("Unable to copy the result. Please try again.");
      });
  };

  const winnerA =
    difference !== null && Number(heightA) > Number(heightB);

  const winnerB =
    difference !== null && Number(heightB) > Number(heightA);

  return (
   <main className="relative min-h-screen overflow-hidden bg-[#fff8f4] text-[#172033]">

  {/* PREMIUM ORANGE AMBIENT BACKGROUND */}
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

    {/* Base warm gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf7] via-[#fff4ed] to-[#fff8f2]" />

    {/* Orange glow top left */}
    <div className="absolute -left-40 -top-40 h-[650px] w-[650px] rounded-full bg-orange-400/25 blur-[150px]" />

    {/* Orange glow right */}
    <div className="absolute right-[-250px] top-[12%] h-[700px] w-[700px] rounded-full bg-orange-500/20 blur-[170px]" />

    {/* Warm amber glow bottom */}
    <div className="absolute bottom-[-300px] left-[10%] h-[750px] w-[750px] rounded-full bg-amber-300/25 blur-[180px]" />

    {/* Soft center orange */}
    <div className="absolute left-[40%] top-[35%] h-[500px] w-[500px] rounded-full bg-orange-200/20 blur-[160px]" />

    {/* Subtle texture */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_65%)]" />

  </div>

      {/* HERO */}

      <section className="relative min-h-[760px] overflow-hidden px-4 pb-24 pt-8 sm:px-6">

        {/* NAV */}

        <div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-2xl">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ffd43b]/25 bg-[#ffd43b]/10 text-xl">
              📏
            </div>

            <div>
              <p className="font-black uppercase tracking-[0.2em]">
                Height Pro
              </p>

              <p className="text-xs text-slate-500">
                Height Championship
              </p>
            </div>

          </div>


          <div className="hidden items-center gap-2 text-sm font-bold text-slate-500 md:flex">

            <span className="h-2 w-2 rounded-full bg-[#39ff88] animate-pulse" />

            LIVE MEASUREMENT

          </div>

        </div>


        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center pt-24 text-center">

          <div className="rounded-full border border-[#eadfd6] bg-[#fffdf9]/85 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#ffd43b] backdrop-blur-xl">

            🏁 The Ultimate Height Battle

          </div>


          <h1 className="mt-8 max-w-5xl text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-8xl lg:text-[9rem]">

            WHO STANDS

            <span className="block bg-gradient-to-r from-[#39ff88] via-[#b9ef35] to-[#ffd43b] bg-clip-text text-transparent">

              TALLER?

            </span>

          </h1>


          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">

            Enter two competitors. Launch the race. Discover who owns the height crown.

          </p>


          {/* HERO COMPETITORS */}

          <div className="relative mt-20 grid w-full max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-12">


            {/* A */}

            <div className="group relative">

              <div className="absolute inset-0 rounded-[2rem] bg-[#39ff88]/20 blur-3xl transition duration-500 group-hover:bg-[#39ff88]/40" />

              <div className="relative rounded-[2rem] border border-[#39ff88]/30 bg-gradient-to-br from-[#39ff88]/15 via-[#f4ffe9]/80 to-[#fffdf9]/90 p-8 backdrop-blur-2xl transition duration-500 group-hover:-translate-y-3">

                <div className="text-7xl sm:text-9xl">
                  🏃
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-[#39ff88]">
                  Competitor A
                </p>

                <h3 className="mt-2 text-2xl font-black uppercase sm:text-4xl">
                  Green Racer
                </h3>

              </div>

            </div>


            {/* VS */}

            <div className="relative z-10">

              <div className="absolute inset-0 rounded-full bg-[#ffd43b]/30 blur-2xl animate-pulse" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-[#ffd43b]/20 via-[#fff8d6]/70 to-[#fffdf9]/90 text-3xl font-black italic backdrop-blur-2xl sm:h-28 sm:w-28 sm:text-5xl">

                VS

              </div>

            </div>


            {/* B */}

            <div className="group relative">

              <div className="absolute inset-0 rounded-[2rem] bg-[#ff7a45]/20 blur-3xl transition duration-500 group-hover:bg-[#ff7a45]/40" />

              <div className="relative rounded-[2rem] border border-[#ff7a45]/30 bg-gradient-to-br from-[#ff7a45]/15 via-[#fff1e8]/80 to-[#fffdf9]/90 p-8 backdrop-blur-2xl transition duration-500 group-hover:-translate-y-3">

                <div className="text-7xl sm:text-9xl">
                  🏃
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-[#ff9d6b]">
                  Competitor B
                </p>

                <h3 className="mt-2 text-2xl font-black uppercase sm:text-4xl">
                  Orange Racer
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* INPUT SECTION */}

      <section className="relative px-4 py-24 sm:px-6">

        <div className="mx-auto max-w-6xl">


          <div className="text-center">

            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ffd43b]">

              Starting Grid

            </p>

            <h2 className="mt-4 text-5xl font-black uppercase tracking-tight sm:text-7xl">

              ENTER THE

              <span className="block bg-gradient-to-r from-[#39ff88] to-[#ffd43b] bg-clip-text text-transparent">

                RACERS

              </span>

            </h2>

          </div>


          {/* INPUT CARDS */}

          <div className="mt-16 grid gap-8 lg:grid-cols-2">


            {/* A */}

            <div className="group relative rounded-[2rem] border border-[#eadfd6] bg-[#fffdf9]/85 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-[#39ff88]/30 sm:p-10">

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#39ff88]/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">

                <div className="flex items-center justify-between border-b border-white/10 pb-6">

                  <div>

                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#39ff88]">

                      Lane 01

                    </p>

                    <h3 className="mt-2 text-3xl font-black uppercase">

                      Green Racer

                    </h3>

                  </div>

                  <div className="text-4xl">
                    🟢
                  </div>

                </div>


                <div className="mt-8">

                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">

                    Competitor Name

                  </label>

                  <input
                    type="text"
                    placeholder="Enter name"
                    value={nameA}
                    onChange={(e) => setNameA(e.target.value)}
                    className="mt-3 w-full rounded-xl border border-[#cfe9d8] bg-[#f5fff8]/90 px-5 py-4 text-lg font-bold outline-none transition focus:border-[#39ff88]/60 focus:bg-[#ffffff]"
                  />


                  <label className="mt-7 block text-xs font-black uppercase tracking-[0.2em] text-slate-500">

                    Height

                  </label>


                  <div className="relative mt-3">

                    <input
                      type="number"
                      placeholder="180"
                      value={heightA}
                      onChange={(e) => setHeightA(e.target.value)}
                      className="w-full rounded-xl border border-[#cfe9d8] bg-[#f5fff8]/90 px-5 py-5 pr-20 text-3xl font-black outline-none transition focus:border-[#39ff88]/60 focus:bg-[#ffffff]"
                    />

                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-black text-[#39ff88]">

                      CM

                    </span>

                  </div>

                </div>

              </div>

            </div>



            {/* B */}

            <div className="group relative rounded-[2rem] border border-[#eadfd6] bg-[#fffdf9]/85 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-[#ff7a45]/30 sm:p-10">

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#ff7a45]/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">

                <div className="flex items-center justify-between border-b border-white/10 pb-6">

                  <div>

                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ff9d6b]">

                      Lane 02

                    </p>

                    <h3 className="mt-2 text-3xl font-black uppercase">

                      Orange Racer

                    </h3>

                  </div>

                  <div className="text-4xl">
                    🟠
                  </div>

                </div>


                <div className="mt-8">

                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">

                    Competitor Name

                  </label>

                  <input
                    type="text"
                    placeholder="Enter name"
                    value={nameB}
                    onChange={(e) => setNameB(e.target.value)}
                  className="mt-3 w-full rounded-xl border border-[#f0d6c8] bg-[#fff7f2]/90 px-5 py-4 text-lg font-bold outline-none transition focus:border-[#ff7a45]/60 focus:bg-white"
                  />


                  <label className="mt-7 block text-xs font-black uppercase tracking-[0.2em] text-slate-500">

                    Height

                  </label>


                  <div className="relative mt-3">

                    <input
                      type="number"
                      placeholder="175"
                      value={heightB}
                      onChange={(e) => setHeightB(e.target.value)}
                      className="w-full rounded-xl border border-[#f0d6c8] bg-[#fff7f2]/90 px-5 py-5 pr-20 text-3xl font-black outline-none transition focus:border-[#ff7a45]/60 focus:bg-white"
                    />

                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-black text-[#ff9d6b]">

                      CM

                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>



          {/* MAIN RACE BUTTON */}

          <div className="mx-auto mt-12 max-w-3xl">

            <button
              onClick={compareHeights}
              disabled={isComparing}
              className="group relative w-full overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-[#39ff88] via-[#7fe36c] to-[#ffd43b] px-8 py-6 text-xl font-black uppercase tracking-wide text-[#07111f] shadow-[0_20px_60px_rgba(57,255,136,0.2)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(57,255,136,0.35)] disabled:cursor-wait disabled:opacity-70"
            >

              <span className="relative z-10 flex items-center justify-center gap-4">

                {isComparing ? (
                  <>
                    <span className="animate-spin">⚙️</span>
                    Measuring Heights...
                  </>
                ) : (
                  <>
                    🏁 Start The Height Race
                    <span className="transition duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </>
                )}

              </span>

              <div className="absolute inset-0 translate-y-full bg-white/30 transition duration-500 group-hover:translate-y-0" />

            </button>

          </div>


          {/* ACTIONS */}

          <div className="mt-6 flex flex-wrap justify-center gap-4">

            <button
              onClick={shareResult}
             className="rounded-xl border border-slate-200 text-slate-600 px-6 py-3 font-bold text-slate-600 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-slate-900"
            >
              🔗 Share Result
            </button>


            <button
              onClick={clearAll}
              className="rounded-xl border border-slate-200 text-slate-600 px-6 py-3 font-bold text-slate-600 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-slate-900"
            >
              ↻ Reset
            </button>

          </div>

        </div>

      </section>



      {/* LIVE MATCHUP */}

      {showVS && (

        <section
          id="result-section"
          className="relative overflow-hidden px-4 py-24 sm:px-6"
        >

          <div className="absolute inset-0 bg-gradient-to-br from-[#39ff88]/5 via-transparent to-[#ff7a45]/5" />

          <div className="relative mx-auto max-w-6xl">

            <div className="rounded-[2.5rem] border border-[#eadfd6] bg-[#fffdf9]/85 px-6 py-14 backdrop-blur-2xl sm:px-12">

              <div className="text-center">

                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 text-slate-600 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#ffd43b]">

                  <span className="h-2 w-2 rounded-full bg-[#39ff88] animate-pulse" />

                  Live Matchup

                </div>


                <div className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row">

                  {/* A */}

                  <div className="relative">

                    <div className="absolute inset-0 rounded-3xl bg-[#39ff88]/30 blur-3xl" />

                    <div className="relative rounded-3xl border border-[#39ff88]/20 bg-gradient-to-br from-[#39ff88]/18 via-[#eaffd8]/45 to-white/70 px-8 py-6 text-center backdrop-blur-xl">

                      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#39ff88]">
                        Competitor A
                      </p>

                      <h3 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
                        {nameA || "Person A"}
                      </h3>

                    </div>

                  </div>


                  {/* VS */}

                  <div className="relative">

                    <div className="absolute inset-0 rounded-full bg-[#ffd43b]/30 blur-3xl animate-pulse" />

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-[#ffd43b]/20 via-[#fff8d6]/70 to-[#fffdf9]/90 text-5xl font-black italic text-[#ffd43b] backdrop-blur-2xl">

                      VS

                    </div>

                  </div>


                  {/* B */}

                  <div className="relative">

                    <div className="absolute inset-0 rounded-3xl bg-[#ff7a45]/30 blur-3xl" />

                    <div className="relative rounded-3xl border border-[#ff7a45]/20 bg-gradient-to-br from-[#ff7a45]/18 via-[#fff0e8]/55 to-white/70 px-8 py-6 text-center backdrop-blur-xl">

                      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ff9d6b]">
                        Competitor B
                      </p>

                      <h3 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
                        {nameB || "Person B"}
                      </h3>

                    </div>

                  </div>

                </div>


                <div className="mt-10 flex items-center justify-center gap-3 text-slate-500">

                  <span className="h-2 w-2 rounded-full bg-[#39ff88] animate-bounce" />

                  <span className="h-2 w-2 rounded-full bg-[#ffd43b] animate-bounce [animation-delay:150ms]" />

                  <span className="h-2 w-2 rounded-full bg-[#ff7a45] animate-bounce [animation-delay:300ms]" />

                  <span className="ml-2 font-bold">
                    Calculating the difference...
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

      )}



      {/* RESULTS */}

      {difference !== null && resultVisible && (

        <section className="relative px-4 py-24 sm:px-6">

          <div className="mx-auto max-w-6xl">


            {/* RESULT HEADER */}

            <div className="text-center">

              <div className="inline-flex rounded-full border border-[#ffd43b]/30 bg-gradient-to-br from-[#ffd43b]/18 via-[#fff8d6]/55 to-white/70 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#ffd43b]">

                🏁 Finish Line Result

              </div>


              <h2 className="mt-8 text-7xl font-black tracking-[-0.08em] sm:text-9xl">

                {difference}

                <span className="ml-3 text-3xl text-[#ffd43b] sm:text-5xl">
                  CM
                </span>

              </h2>


              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">

                {winnerA
                  ? `${nameA || "Person A"} wins the height championship by ${difference} cm`
                  : winnerB
                  ? `${nameB || "Person B"} wins the height championship by ${difference} cm`
                  : "Both competitors finish at exactly the same height"}

              </p>

            </div>



            {/* PREMIUM GLASS STADIUM */}

            <div className="relative mt-16 overflow-hidden rounded-[3rem] border border-[#eadfd6] bg-[#fffdf9]/85 px-6 pb-14 pt-16 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-3xl sm:px-14">

              {/* GLOWS */}

              <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#39ff88]/20 blur-[100px]" />

              <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#ff7a45]/20 blur-[100px]" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d5dfc]/10 blur-[120px]" />


              {/* STADIUM HEADER */}

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#39ff88] via-[#ffd43b] to-[#ff7a45]" />


              {/* GRID */}

              <div className="pointer-events-none absolute inset-x-8 bottom-10 top-20 opacity-10">

                <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

              </div>


              <div className="relative grid grid-cols-[1fr_auto_1fr] items-end gap-4 sm:gap-16">


                {/* A */}

                <div className="flex flex-col items-center">

                  {winnerA && (

                    <div className="mb-6 rounded-full border border-[#ffd43b]/40 bg-gradient-to-br from-[#ffd43b]/18 via-[#fff8d6]/55 to-white/70 px-5 py-2 font-black text-[#ffd43b] backdrop-blur-xl">

                      🏆 WINNER

                    </div>

                  )}


                  <div className="flex h-[330px] items-end sm:h-[450px]">

                    <div
                      className="relative w-20 overflow-hidden rounded-t-[2rem] border border-white/20 bg-gradient-to-t from-[#1dbb6c] to-[#8cff70] shadow-[0_20px_60px_rgba(57,255,136,0.3)] transition-all duration-[1200ms] sm:w-36"
                      style={{
                        height: animateBars
  ? `${Math.min(Number(heightA) * 2.2, 430)}px`
  : "0px",
                      }}
                    >

                      <div className="absolute inset-y-0 left-4 w-4 bg-white/20 blur-sm" />

                      <div className="absolute inset-x-0 top-0 h-16 bg-white/10" />

                    </div>

                  </div>


                  <h3 className="mt-8 text-xl font-black uppercase sm:text-3xl">

                    {nameA || "Person A"}

                  </h3>


                  <p className="mt-2 text-4xl font-black text-[#39ff88]">

                    {heightA} CM

                  </p>


                  <p className="text-sm font-bold text-slate-500">

                    {cmToFeetInches(Number(heightA))}

                  </p>

                </div>



                {/* CENTER */}

                <div className="mb-28">

                  <div className="rounded-full border border-white/20 bg-gradient-to-br from-[#ffd43b]/20 via-[#fff8d6]/70 to-[#fffdf9]/90 px-6 py-5 text-3xl font-black text-[#ffd43b] shadow-[0_0_40px_rgba(255,212,59,0.15)] backdrop-blur-2xl">

                    VS

                  </div>

                </div>



                {/* B */}

                <div className="flex flex-col items-center">

                  {winnerB && (

                    <div className="mb-6 rounded-full border border-[#ffd43b]/40 bg-gradient-to-br from-[#ffd43b]/18 via-[#fff8d6]/55 to-white/70 px-5 py-2 font-black text-[#ffd43b] backdrop-blur-xl">

                      🏆 WINNER

                    </div>

                  )}


                  <div className="flex h-[330px] items-end sm:h-[450px]">

                    <div
                      className="relative w-20 overflow-hidden rounded-t-[2rem] border border-white/20 bg-gradient-to-t from-[#e85d1c] to-[#ffb347] shadow-[0_20px_60px_rgba(255,122,69,0.3)] transition-all duration-[1200ms] sm:w-36"
                      style={{
  height: animateBars
    ? `${Math.min(Number(heightB) * 2.2, 430)}px`
    : "0px",
}}
                        
                    >

                      <div className="absolute inset-y-0 left-4 w-4 bg-white/20 blur-sm" />

                      <div className="absolute inset-x-0 top-0 h-16 bg-white/10" />

                    </div>

                  </div>


                  <h3 className="mt-8 text-xl font-black uppercase sm:text-3xl">

                    {nameB || "Person B"}

                  </h3>


                  <p className="mt-2 text-4xl font-black text-[#ff9d6b]">

                    {heightB} CM

                  </p>


                  <p className="text-sm font-bold text-slate-500">

                    {cmToFeetInches(Number(heightB))}

                  </p>

                </div>

              </div>

            </div>



            {/* SCOREBOARD */}

            <div className="mt-12 rounded-[2rem] border border-[#eadfd6] bg-[#fffdf9]/85 p-8 backdrop-blur-2xl sm:p-10">

              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                <div>

                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ffd43b]">

                    Championship Board

                  </p>

                  <h3 className="mt-3 text-4xl font-black uppercase">

                    Race Scores

                  </h3>

                </div>


                <div className="grid grid-cols-2 gap-4">


                  <div className="min-w-[140px] rounded-2xl border border-[#39ff88]/20 bg-[#39ff88]/5 p-6 text-center">

                    <p className="font-black">

                      {nameA || "Person A"}

                    </p>

                    <p className="mt-2 text-5xl font-black text-[#39ff88]">

                      {scoreA}

                    </p>

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">

                      Wins

                    </p>

                  </div>


                  <div className="min-w-[140px] rounded-2xl border border-[#ff7a45]/20 bg-[#ff7a45]/5 p-6 text-center">

                    <p className="font-black">

                      {nameB || "Person B"}

                    </p>

                    <p className="mt-2 text-5xl font-black text-[#ff9d6b]">

                      {scoreB}

                    </p>

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">

                      Wins

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      )}



      {/* CELEBRITY RACES */}

      <section className="relative px-4 py-24 sm:px-6">

        <div className="mx-auto max-w-6xl">


          <div className="text-center">

            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ffd43b]">

              Challenge The Champions

            </p>


            <h2 className="mt-4 text-5xl font-black uppercase sm:text-7xl">

              COMPARE WITH

              <span className="block bg-gradient-to-r from-[#39ff88] to-[#ffd43b] bg-clip-text text-transparent">

                THE STARS

              </span>

            </h2>


            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">

              Enter your height and challenge legendary athletes.

            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-3">


            {/* RONALDO */}

            <div className="group rounded-[2rem] border border-[#eadfd6] bg-[#fffdf9]/85 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-3 hover:border-[#39ff88]/30">

              <div className="flex items-center justify-between">

                <span className="text-5xl">⚽</span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black uppercase text-slate-600">

                  Football

                </span>

              </div>


              <h3 className="mt-10 text-3xl font-black uppercase">

                Cristiano
                <br />
                Ronaldo

              </h3>


              <div className="mt-8 border-t border-white/10 pt-5">

                <p className="text-xs font-black uppercase tracking-wider text-slate-500">

                  Height

                </p>

                <p className="mt-2 text-5xl font-black text-[#39ff88]">

                  187

                  <span className="ml-2 text-lg text-slate-500">
                    CM
                  </span>

                </p>

              </div>


              <button
                onClick={() =>
                  compareWithCelebrity("Cristiano Ronaldo", 187)
                }
                className="mt-8 w-full rounded-xl border border-[#39ff88]/30 bg-gradient-to-br from-[#39ff88]/18 via-[#eaffd8]/45 to-white/70 px-5 py-4 font-black uppercase text-[#39ff88] transition hover:bg-[#39ff88] hover:text-[#07111f]"
              >

                Race Ronaldo 🏁

              </button>

            </div>



            {/* MESSI */}

            <div className="group rounded-[2rem] border border-[#eadfd6] bg-[#fffdf9]/85 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-3 hover:border-[#ffd43b]/30">

              <div className="flex items-center justify-between">

                <span className="text-5xl">⚽</span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black uppercase text-slate-600">

                  Football

                </span>

              </div>


              <h3 className="mt-10 text-3xl font-black uppercase">

                Lionel
                <br />
                Messi

              </h3>


              <div className="mt-8 border-t border-white/10 pt-5">

                <p className="text-xs font-black uppercase tracking-wider text-slate-500">

                  Height

                </p>

                <p className="mt-2 text-5xl font-black text-[#ffd43b]">

                  170

                  <span className="ml-2 text-lg text-slate-500">
                    CM
                  </span>

                </p>

              </div>


              <button
                onClick={() =>
                  compareWithCelebrity("Lionel Messi", 170)
                }
                className="mt-8 w-full rounded-xl border border-[#ffd43b]/30 bg-gradient-to-br from-[#ffd43b]/18 via-[#fff8d6]/55 to-white/70 px-5 py-4 font-black uppercase text-[#ffd43b] transition hover:bg-[#ffd43b] hover:text-[#07111f]"
              >

                Race Messi 🏁

              </button>

            </div>



            {/* CONOR */}

            <div className="group rounded-[2rem] border border-[#eadfd6] bg-[#fffdf9]/85 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-3 hover:border-[#ff7a45]/30">

              <div className="flex items-center justify-between">

                <span className="text-5xl">🥊</span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black uppercase text-slate-600">

                  UFC

                </span>

              </div>


              <h3 className="mt-10 text-3xl font-black uppercase">

                Conor
                <br />
                McGregor

              </h3>


              <div className="mt-8 border-t border-white/10 pt-5">

                <p className="text-xs font-black uppercase tracking-wider text-slate-500">

                  Height

                </p>

                <p className="mt-2 text-5xl font-black text-[#ff9d6b]">

                  175

                  <span className="ml-2 text-lg text-slate-500">
                    CM
                  </span>

                </p>

              </div>


              <button
                onClick={() =>
                  compareWithCelebrity("Conor McGregor", 175)
                }
                className="mt-8 w-full rounded-xl border border-[#ff7a45]/30 bg-gradient-to-br from-[#ff7a45]/18 via-[#fff0e8]/55 to-white/70 px-5 py-4 font-black uppercase text-[#ff9d6b] transition hover:bg-[#ff7a45] hover:text-[#07111f]"
              >

                Race Conor 🏁

              </button>

            </div>

          </div>

        </div>

      </section>



      {/* HISTORY */}

      {history.length > 0 && (

        <section className="px-4 py-24 sm:px-6">

          <div className="mx-auto max-w-5xl">

            <div className="rounded-[2rem] border border-[#eadfd6] bg-[#fffdf9]/85 p-8 backdrop-blur-2xl sm:p-10">

              <div className="flex items-center gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ff7a45]/20 bg-[#ff7a45]/10 text-2xl">
                  📜

                </div>


                <div>

                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ffd43b]">

                    Previous Races

                  </p>

                  <h2 className="mt-1 text-3xl font-black uppercase">

                    Race History

                  </h2>

                </div>

              </div>


              <div className="mt-8 space-y-3">

                {history.map((item, index) => (

                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-xl border border-white/5 bg-[#fff7f0]/80 px-5 py-4 text-slate-600 transition hover:border-white/10 hover:bg-white/[0.04]"
                  >

                    <span className="text-[#ffd43b]">

                      🏁

                    </span>

                    <span className="font-semibold">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

      )}



      {/* FOOTER */}

      <footer className="border-t border-white/10 px-4 py-10 text-center">

        <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">

          Height Pro · Built For The Championship

        </p>

      </footer>

    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  );
}