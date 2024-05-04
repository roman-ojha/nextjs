// this file only contain the client only code which should only executed on the client side

// by importing 'client-only' package in this module this module will trigger the build time error if it is mistakenly included inside server side code
import "client-only";
// now if some one try to use client side function in server component the build process will fail

export const clientSideFunction = () => {
  console.log(
    `use window object,
        use local storage`
  );
  return "client result";
};
