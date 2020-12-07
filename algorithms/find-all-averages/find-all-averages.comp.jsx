import clsx from "clsx";

export default function FindAllAverages({ state }) {
  const { arr, windowStart, windowEnd = 0 } = state;
  const inWindow = (index) => index >= windowStart && index <= windowEnd;

  return (
    <div className="flex">
      {arr.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className={clsx(
            "w-16 h-16 border-black border-4 rounded-md font-semibold font-mono flex justify-center items-center mr-2 transform transition-all",
            {
              "opacity-100": inWindow(index),
              "opacity-40 translate-y-2": !inWindow(index),
            }
          )}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
