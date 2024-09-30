import React from "react";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="card bg-base-100 shadow-xl items-center flex-row py-10 px-5 h-full">
      {/* <div className="relative flex items-center pl-3"> */}
      <div className="">
        <p className="font-bold text-3xl">Hey Bro!</p>
        <p className="font-bold text-3xl">Ready for lunch tomorrow?</p>
        <br />
        <p className="text-slate-400 text-sm font-medium">
          Confirm your spot for tomorrow's meal, and we'll handle the rest!
        </p>
      </div>
      <div className="absolute right-0 bottom-0">
        <img src="/lunch-box.png" alt="A lunch box" />
      </div>
      {/* </div> */}
    </div>
  );
}
