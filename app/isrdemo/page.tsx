/*
 * This is demo code only
 */

const REVALIDATE_VALUE =
  process.env.NEXT_PUBLIC_ISR_DEMO_REVALIDATE_DURATION || "0";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/isrdemo/api`, {
    next: { revalidate: Number(REVALIDATE_VALUE) },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Isr() {
  const data = await getData();

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <p>
        {`This is a random number that will be cached for ${REVALIDATE_VALUE} seconds`}
      </p>
      <h2 className="mb-8 text-2xl font-bold">{data.random}</h2>
    </main>
  );
}
