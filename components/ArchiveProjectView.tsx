import { Text, View } from "react-native";
import { Link } from "expo-router";
import { getItemsForProject, type ArchiveProject } from "@/lib/archive";

export function ArchiveProjectView({ project }: { project: ArchiveProject }) {
  const items = getItemsForProject(project.id);

  return (
    <View className="ksm-shelves">
      <Link href="/archive">
        <Text className="ksm-shelves-kicker">Archive</Text>
      </Link>
      <Text accessibilityRole="header" className="ksm-shelves-title ksm-shelves-title--piece">
        {project.title}
      </Text>
      <Text className="ksm-shelves-intro">{project.summary}</Text>
      <a className="ksm-shelves-download" href={project.download} download={project.downloadName}>
        Download
      </a>
      <section className="ksm-shelf" aria-label={project.title}>
        <div className="ksm-shelf-head">
          <h2 className="ksm-shelf-name">{project.title}</h2>
          <span className="ksm-shelf-count">{items.length}</span>
        </div>
        <ul className="ksm-shelf-rows">
          {items.map((item) => (
            <li key={item.id} className="ksm-shelf-row">
              <Link
                href={{ pathname: "/archive/items/[slug]", params: { slug: item.id } }}
                className="ksm-shelf-link"
              >
                <img src={item.thumb} alt="" />
                <span className="ksm-shelf-kind">{item.category}</span>
                <span className="ksm-shelf-piece">{item.title}</span>
              </Link>
              <a className="ksm-shelf-dl" href={item.download} download={item.downloadName}>
                Download
              </a>
            </li>
          ))}
        </ul>
      </section>
    </View>
  );
}
