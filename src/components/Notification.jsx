import { useState } from "react";

export function Error({ message, show }) {
  const [showing] = useState(show);
  return (
    <>
      <div
        className={`rounded ml-0 p-3 m-4 bg-red-200 relative ${
          showing ? "" : "hidden"
        }`}
      >
        <div
          className={`absolute -top-3 right-0 text-dark p-2 text-xl aspect-square`}
        ></div>
        <span class="bg-red-100 text-red-800 text-lg font-semibold">
          {message}
        </span>
      </div>
    </>
  );
}

export function Success({ message, show }) {
  const [showing] = useState(show);
  return (
    <>
      <div
        className={`rounded ml-0 p-3 m-4 bg-green-200 relative ${
          showing ? "" : "hidden"
        }`}
      >
        <div
          className={`absolute -top-3 right-0 text-dark p-2 text-xl aspect-square`}
        ></div>
        <span class=" text-green-800 text-lg font-semibold">{message}</span>
      </div>
    </>
  );
}
