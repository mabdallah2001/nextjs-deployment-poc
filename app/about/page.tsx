// export default async function About() {
//   return <main>About page</main>;
// }
import React from "react";

async function getData() {
  const res = await fetch("https://api.publicapis.org/entries");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main className="flex flex-col justify-between p-24">
      <h1>Static content, pulled from an API:</h1>
      <p>Amount of data: {data.count}</p>

      <>
        {data.entries.map((data: any, key: any) => (
          <p key={data}>
            <>{data.API + ": "}</>
            <>{data.Description}</>
          </p>
        ))}
      </>
    </main>
  );
}
