"use client";

import { useState } from "react";

// let's include a client only operation like use state call on this component

export default function ClientComponentTwo() {
  const [first, setName] = useState("Batman");
  return <h1>Client component 2</h1>;
}
