"use client"; // so whenever we will add this directive inside the parent component this will going to be a client component where all the javascript login will run on the client side
// at the first time component tree '../../04_Visualize.png'
// also we will see on the browser console that 'NavLinks' & 'NavSearch' component 'console.log' statement is also run's on the client side browser
// Here is the question: if NavBar is only the client component why other 'NavLinks' & 'NavSearch ' component are running on the client
// NOTE: whenever we will make the parent component a client component it not only make that component as a client component but also affects every child component in the component tree: '../../05_Visualize.png'
// So, it is recommended to place client component in the component tree as low as possible
// So, in that case we can make 'NavSearch' as a client component because in this case only that component is requiring the state
// import { useState } from "react";
import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";

export const Navbar = () => {
  //   const [search, setSearch] = useState("");
  console.log(`Navbar rendered`);
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
