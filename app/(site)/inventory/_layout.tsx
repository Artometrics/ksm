import Head from "expo-router/head";
import { Slot } from "expo-router";

export default function InventoryLayout() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/inventory.css" />
      </Head>
      <Slot />
    </>
  );
}
