import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { CvDocument } from "@/components/CvDocument";

export default function CvScreen() {
  return (
    <>
      <Head>
        <title>CV · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-4 py-8">
        <CvDocument />
      </Wrapper>
    </>
  );
}
