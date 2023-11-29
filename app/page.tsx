"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  return (
    <main>
      <Link href="/dashboard">Dashboard</Link>
      <button type="button" onClick={() => router.push("/dashboard")}>
        Dashboard
      </button>
    </main>
  );
}
