export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params?.slug ?? "";
  const formatted = slug ? slug.replaceAll("-", " ") : "Height comparison";

  const a = slug.split("-vs-")[0]?.replace("cm", "");
const b = slug.split("-vs-")[1]?.replace("cm", "");

return {
  title: `${a}cm vs ${b}cm Height Comparison`,
  description: `Compare ${a}cm and ${b}cm instantly. See who is taller and the exact difference.`,
};
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  const slug = params?.slug ?? "";
  const parts = slug.split("-vs-");

const heightA = Number(parts[0]?.replace("cm", ""));
const heightB = Number(parts[1]?.replace("cm", ""));

  const formatted = slug ? slug.replaceAll("-", " ") : "";
const aHeight = heightA;
const bHeight = heightB;

const winner = aHeight > bHeight ? "A" : bHeight > aHeight ? "B" : "tie";
<h2 className="mt-4 text-lg font-semibold text-gray-700">
  Who is taller: {heightA}cm or {heightB}cm?
</h2>
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="text-center p-10 bg-white shadow-xl rounded-2xl">

  <h1 className="text-4xl font-bold text-gray-900">
    Height Comparison
  </h1>

  <p className="mt-2 text-gray-500">
    {formatted}
  </p>

  <div className="mt-8 flex justify-center gap-10">

    {/* LEFT */}
    <div className="text-center">
      <div className="text-2xl font-bold text-blue-600">
        {heightA} cm
      </div>
      <p className="text-gray-600">Person A</p>
    </div>

    {/* RIGHT */}
    <div className="text-center">
      <div className="text-2xl font-bold text-green-600">
        {heightB} cm
      </div>
      <p className="text-gray-600">Person B</p>
    </div>

  </div>

  <p className="mt-6 text-lg font-semibold text-gray-700">
    {heightA > heightB
      ? "Left person is taller 🏆"
      : heightB > heightA
      ? "Right person is taller 🏆"
      : "Both are same height"}
      <p className="mt-6 text-gray-600 text-sm">
  Compare {heightA}cm vs {heightB}cm. Find out who is taller instantly.
  This tool helps you check height differences visually.
</p>
  </p>
<div className="mt-10 flex items-end justify-center gap-10 h-64">

<div className="flex flex-col items-center">
  {winner === "A" && (
    <div className="mb-2 text-yellow-500 text-2xl">🏆</div>
  )}

  <div
    className={`w-16 rounded-t-xl transition-all duration-700 ${
      winner === "A" ? "bg-yellow-400 shadow-lg shadow-yellow-300" : "bg-blue-500"
    }`}
    style={{ height: `${heightA * 1.2}px` }}
  />

  <p className="mt-2 text-sm font-semibold text-gray-700">
    {heightA} cm
  </p>
</div>
  <div className="flex flex-col items-center">
  {winner === "B" && (
    <div className="mb-2 text-yellow-500 text-2xl">🏆</div>
  )}

  <div
    className={`w-16 rounded-t-xl transition-all duration-700 ${
      winner === "B" ? "bg-yellow-400 shadow-lg shadow-yellow-300" : "bg-green-500"
    }`}
    style={{ height: `${heightB * 1.2}px` }}
  />

  <p className="mt-2 text-sm font-semibold text-gray-700">
    {heightB} cm
  </p>
</div>
</div>
</div>
    </main>
  );
}