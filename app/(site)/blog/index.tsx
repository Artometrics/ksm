import { Text, View } from "react-native";
import { Link } from "expo-router";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { getBlogPosts } from "@/lib/content";

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <>
      <Head>
        <title>Journal · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-4 py-8">
        <Text className="ksm-kicker">Journal</Text>
        <Text accessibilityRole="header" className="ksm-headline">
          Notes, when they are ready.
        </Text>
        <Text className="ksm-lede">
          Kyle's essays, thoughts, and commentary — reviewed drafts only.
          Placeholder magazine files are not linked here.
        </Text>
        {posts.length === 0 ? (
          <Text className="ksm-lede">No published notes yet.</Text>
        ) : (
          posts.map((post) => (
            <Link key={post.slug} href={`/blog/posts/${post.slug}` as "/blog"}>
              <Text className="ksm-card-title">{post.title}</Text>
            </Link>
          ))
        )}
      </Wrapper>
    </>
  );
}
