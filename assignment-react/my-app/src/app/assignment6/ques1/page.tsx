"use client";

import dynamic from "next/dynamic";

const CounterWithStep = dynamic(() => import("../../../components/CounterWithStep"), {
  loading: () => <p>Loading..</p>,
});

export default function Home() {
  return (
    <div>
      <p>
        1. Create a Next.js app using the App Router with multiple pages. Use
        next/dynamic to lazily load page components and improve initial load
        time. Components should load only when their routes are visited.
      </p>

      <CounterWithStep />
    </div>
  );
}
