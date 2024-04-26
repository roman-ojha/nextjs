"use client";
import "./styles.css";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Here we are just creating the state on the component and use input element to gather the value
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        {/* Let's say that we have added value to input field and navigate to '/login' route we will see that the value of input field have not get reset or 'input' value have not get remounted because the common variable will not get render from the layout page only the 'children' will get replaced without touching the other layout state */}
        {/* But sometime you want to create a new instance for each of their children on navigation */}
        {/* In that cases you can use 'template' file rather then layout */}
        {/* '../../../01_Templates.png' */}
        {/* https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates */}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        {/* NOTE: it is possible to include layout.tsx and template.tsx file in such scenario layout.tsx render first and then layout children will going to be replaced by exported from the template file: '../../../02_Layout_and_Templates.png' */}
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
