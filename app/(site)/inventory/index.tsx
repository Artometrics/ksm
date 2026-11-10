import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { InventoryLibrary } from "@/components/InventoryLibrary";

export default function InventoryScreen() {
  return (
    <>
      <Head>
        <title>Inventory · Kyle McAuliffe</title>
        <meta
          name="description"
          content="A noindex shelf of Kyle McAuliffe's sites, repos, projects, and documents."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/inventory.css" />
      </Head>
      <Wrapper className="py-8">
        <InventoryLibrary />
      </Wrapper>
    </>
  );
}
