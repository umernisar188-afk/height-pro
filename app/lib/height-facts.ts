import { people } from "../data/people";

type Person = (typeof people)[number];

export function getPersonFacts(person: Person) {
  const sameCategory = people.filter((p) => p.category === person.category);

  const categoryRank =
    sameCategory.filter((p) => p.heightCm > person.heightCm).length + 1;

  const categoryAverage = Math.round(
    sameCategory.reduce((sum, p) => sum + p.heightCm, 0) / sameCategory.length
  );

  const shorterCount = people.filter((p) => p.heightCm < person.heightCm).length;
  const tallerCount = people.filter((p) => p.heightCm > person.heightCm).length;

  const closest = people
    .filter((p) => p.slug !== person.slug)
    .sort(
      (a, b) =>
        Math.abs(a.heightCm - person.heightCm) -
          Math.abs(b.heightCm - person.heightCm) ||
        a.slug.localeCompare(b.slug)
    )
    .slice(0, 3);

  const diffFromAverage = person.heightCm - categoryAverage;
  const averageText =
    diffFromAverage === 0
      ? `exactly the ${person.category} average of ${categoryAverage} cm on Height Pro`
      : `${Math.abs(diffFromAverage)} cm ${
          diffFromAverage > 0 ? "above" : "below"
        } the ${person.category} average of ${categoryAverage} cm on Height Pro`;

  return {
    categoryRank,
    categoryTotal: sameCategory.length,
    averageText,
    shorterCount,
    tallerCount,
    totalPeople: people.length,
    closest,
  };
}
export function getCompareFacts(a: Person, b: Person) {
  const taller = a.heightCm >= b.heightCm ? a : b;
  const shorter = taller.slug === a.slug ? b : a;
  const diffCm = taller.heightCm - shorter.heightCm;
  const diffInches = Math.round((diffCm / 2.54) * 10) / 10;
  const percent =
    Math.round((diffCm / shorter.heightCm) * 1000) / 10;

  const rankOf = (p: Person) =>
    people.filter((x) => x.heightCm > p.heightCm).length + 1;

  const between = people.filter(
    (x) =>
      x.slug !== a.slug &&
      x.slug !== b.slug &&
      x.heightCm > shorter.heightCm &&
      x.heightCm < taller.heightCm
  );

  return {
    taller,
    shorter,
    diffCm,
    diffInches,
    percent,
    rankA: rankOf(a),
    rankB: rankOf(b),
    totalPeople: people.length,
    between: between.slice(0, 3),
    betweenCount: between.length,
    sameCategory: a.category === b.category,
  };
}