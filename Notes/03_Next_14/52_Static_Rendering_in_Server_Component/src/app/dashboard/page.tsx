"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");
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
