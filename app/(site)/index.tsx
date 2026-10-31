import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { HomeLauncher } from "@/components/HomeLauncher";

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>Home · Kyle McAuliffe</title>
        <meta
          name="description"
          content="Search, launch, and browse Kyle McAuliffe's projects."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="ksm-home-wrap py-4">
        <HomeLauncher />
      </Wrapper>
    </>
  );
}
