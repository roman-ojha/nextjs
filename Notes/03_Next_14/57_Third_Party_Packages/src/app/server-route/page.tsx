// import { serverSideFunction } from "@/utils/server-utils";
import ImageSlider from "@/components/ImageSlider";
import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./ImageSlider.css";

export default function ServerRoutePage() {
  /* Implementing the react-slick inside the server component which will throw us an error, this is because the 'Slider' component is using the client side features but the library code doesn't have a "use client" directive
   * One way is to add "use client" directive for this page but in that case we can't be able to use the server feature like data fetching and many more
   * To resolve this we have to encapsulate component in this case 'Slider' that only depends on client only feature with in your own client component
   */
  // so Rather then using the 'Slider' component inside this server component we will create it's own client component and use it here
  // const settings = {
  //   dots: true,
  // };
  // return (
  //   <div className="image-slider-container">
  //     <Slider {...settings}>
  //       <div>
  //         <img src="https://picsum.photos/400/200" />
  //       </div>
  //       <div>
  //         <img src="https://picsum.photos/400/200" />
  //       </div>
  //       <div>
  //         <img src="https://picsum.photos/400/200" />
  //       </div>
  //       <div>
  //         <img src="https://picsum.photos/400/200" />
  //       </div>
  //     </Slider>
  //   </div>
  // );

  return (
    <>
      <ImageSlider />
    </>
  );
}
