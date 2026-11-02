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