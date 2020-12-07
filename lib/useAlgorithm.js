import React from "react";

export default function useAlgorithm(algorithm, initialInputs) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const [result, steps] = algorithm(...initialInputs);
  const next = () => setActiveIndex((index) => (index + 1) % steps.length);
  const prev = () => setActiveIndex((index) => Math.max(index - 1, 0));

  return {
    state: { returnValue: result, ...steps[activeIndex] },
    next,
    prev,
  };
}
