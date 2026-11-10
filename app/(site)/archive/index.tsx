import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { ArchiveLibrary } from "@/components/ArchiveLibrary";

export default function ArchiveScreen() {
  return (
    <>
      <Head>
        <title>Archive · Kyle McAuliffe</title>
        <meta
          name="description"
          content="A noindex shelf of Kyle McAuliffe's drafts, storyboards, builds, and project files."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/archive.css" />
      </Head>
      <Wrapper className="py-8">
        <ArchiveLibrary />
      </Wrapper>
    </>
  );
}
