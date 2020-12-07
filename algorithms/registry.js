import FindAllAverages from "./find-all-averages/find-all-averages.comp";
import findAllAverages from "./find-all-averages/find-all-averages.impl";

export default {
  "find-all-averages": {
    Component: FindAllAverages,
    implementation: findAllAverages,
    initialInputs: [[1, 3, 2, 6, -1, 4, 1, 8, 2], 3],
  },
};
