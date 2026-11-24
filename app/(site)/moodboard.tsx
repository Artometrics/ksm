import Head from "expo-router/head";
import { MoodboardBoard } from "@/components/MoodboardBoard";

export default function MoodboardScreen() {
  return (
    <>
      <Head>
        <title>Moodboard · Kyle McAuliffe</title>
        <meta
          name="description"
          content="Kyle McAuliffe's 2025 design references, as a journal and a library."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="ksm-page-sheet ksm-mood">
        <MoodboardBoard />
      </div>
    </>
  );
}
