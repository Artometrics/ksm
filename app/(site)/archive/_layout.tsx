import Head from "expo-router/head";
import { Slot } from "expo-router";

export default function ArchiveLayout() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/archive.css" />
      </Head>
      <Slot />
    </>
  );
}
