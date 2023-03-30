import { useState } from "react";
import Image from "next/image";
import airplane from "./../../../public/airplane.png";
import stays from "./../../../public/bed.png";

export default function SearchBarTest() {
  return (
    <div classname="container flex mx-10">
      <a classname="flex-1 text-center relative">A</a>
      <a classname="flex-1 text-center relative">B</a>
      <a classname="flex-1 text-center relative">C</a>
    </div>
  );
}
