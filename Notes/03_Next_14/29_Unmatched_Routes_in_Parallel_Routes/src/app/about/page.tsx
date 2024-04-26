import { Metadata } from "next";

// Defining static metadata object
export const metadata: Metadata = {
  title: "Home page",
};

export default function About() {
  return <h1>About Me</h1>;
}
