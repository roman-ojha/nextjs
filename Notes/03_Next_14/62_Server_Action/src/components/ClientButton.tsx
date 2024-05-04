"use client";

import { useEffect } from "react";

export default function ClientButton({ displayLog }: { displayLog: () => {} }) {
  // Server Actions are not limited to <form> and can be invoked from event handlers, useEffect, third-party libraries, and other form elements like <button>.
  useEffect(() => {
    displayLog();
  }, [displayLog]);
  return (
    <>
      <button
        onClick={() => {
          displayLog();
        }}
      >
        displayLog
      </button>
    </>
  );
}
