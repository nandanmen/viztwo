import Head from "next/head";
import styles from "../styles/Home.module.css";

import algorithms from "../algorithms/registry";
import useAlgorithm from "../lib/useAlgorithm";

export default function Home({ algorithm }) {
  const { Component, implementation, initialInputs } = algorithms[algorithm];
  const { state, next, prev } = useAlgorithm(implementation, initialInputs);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component state={state} />
        <div className="flex justify-center mt-12">
          <button
            className="bg-gray-200 rounded-lg px-4 py-2 font-semibold mr-2"
            onClick={prev}
          >
            Prev
          </button>
          <button
            className="bg-gray-200 rounded-lg px-4 py-2 font-semibold"
            onClick={next}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      algorithm: "find-all-averages",
    },
  };
}
