import Link from "next/link";
import { Header } from "../components/header";

export default function Consumer() {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex flex-row min-h-screen min-w-full bg-fblack text-white">
        <a
          className="border-green-500 border-4 w-1/2 m-auto text-center font-bold font-Poppins text-5xl"
          href="/Consumer/browse"
        >
          Watch uploaded content
        </a>
        <a
          className="border-green-500 border-4 w-1/2 m-auto text-center font-bold font-Poppins text-5xl"
          href="/Consumer/playStream"
        >
          Play Live Stream
        </a>
      </div>
    </div>
  );
}
