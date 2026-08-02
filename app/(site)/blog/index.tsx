import { Text, View } from "react-native";
import { Wrapper } from "@/components/Wrapper";
import { BlogCard } from "@/components/BlogCard";
import { PageSeo } from "@/components/PageSeo";
import { getBlogPosts } from "@/lib/content";

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <Wrapper className="gap-3 py-10">
      <PageSeo
        title="Magazine"
        description="Essays and interviews on design, systems, and craft."
        path="/blog"
      />
      <Text className="text-xs font-medium uppercase tracking-[1.8px] text-accent">
        Archive
      </Text>
      <Text className="font-serif text-[40px] font-light tracking-tight text-fg">
        Magazine
      </Text>
      <Text className="mb-2 max-w-[560px] font-sans text-[17px] leading-[26px] text-muted">
        Essays and interviews on design systems, UI patterns, and the craft of
        building products.
      </Text>
      <View className="mb-1 mt-2 h-px bg-border" />
      <View>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} variant="row" />
        ))}
      </View>
    </Wrapper>
  );
}
