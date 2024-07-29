import React from "react";
import HomeHeader from "../components/HomeHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/** header */}
      <HomeHeader />

      {/** body */}
      {/* <div className="">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          alt="Google Logo"
          width={300}
          height={100}
          priority
          style={{ width: "auto" }}
        />
      </div> */}
    </>
  );
}
