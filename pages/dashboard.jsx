import React from "react";
import { Header } from "../components/header";

export default function dashboard() {
  return (
    <div className="flex flex-column">
      <Header />
      <div className="flex flex-row min-h-screen min-w-full bg-fblack text-white">
        <a
          className="border-green-500 border-4 w-1/2 m-auto text-center font-bold font-Poppins text-5xl"
          href="/creator"
        >
          Creator ?
        </a>
        <a
          className="border-green-500 border-4 w-1/2 m-auto text-center font-bold font-Poppins text-5xl"
          href="/consumer"
        >
          Consumer ?
        </a>
      </div>
    </div>
  );
}
