import ImageSlider from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";
import React from "react";

export default function ServerRoutePage() {
  // const clientResult = clientSideFunction(); // this is the client only function which we are including inside our server component
  return (
    <>
      {/* <p>{clientResult}</p> */}
      <ImageSlider />
    </>
  );
}
