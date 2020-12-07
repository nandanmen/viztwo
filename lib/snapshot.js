import rfdc from "rfdc";

const clone = rfdc();

export default {
  createSnapshot() {
    const data = [];
    return {
      data,
      push(snapshot) {
        data.push(clone(snapshot));
      },
    };
  },
};
