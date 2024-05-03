// because we are using 'useState' which can't run on server we have to make this component as a client component
"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");
  // client component rendering behavior: https://youtu.be/KvjWqn1VpPc?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&t=322
  console.log("Dashboard client component");
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
