import { Text } from "react-native";
import { Wrapper } from "@/components/Wrapper";
import { PageSeo } from "@/components/PageSeo";

export default function AboutScreen() {
  return (
    <Wrapper variant="prose" className="gap-4 py-10">
      <PageSeo
        title="About"
        description="Hemingway conducts in-depth interviews with design engineers and makers."
        path="/about"
      />
      <Text className="text-xs font-medium uppercase tracking-[1.8px] text-accent">
        About
      </Text>
      <Text className="font-serif text-4xl font-light text-fg">
        Design conversations, written carefully.
      </Text>
      <Text className="font-sans text-base leading-7 text-muted">
        Hemingway conducts in-depth interviews with some of the top design
        engineers working today. Whether you are commuting, deep in a build, or
        looking for a quiet moment at home, Hemingway makes it easy to stay
        connected to cutting-edge craft.
      </Text>
      <Text className="font-sans text-base leading-7 text-muted">
        The magazine and podcast share one editorial voice: clear writing,
        practical insight, and respect for the people who ship real products.
      </Text>
    </Wrapper>
  );
}
