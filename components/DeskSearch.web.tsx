import { useEffect, useMemo, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type Row = {
  title: string;
  line: string;
  href: string;
  tags: string[];
  kind: string;
};

export function DeskSearch() {
  const inputRef = useRef<TextInput>(null);
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState<Row[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let dead = false;
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data: Row[]) => {
        if (!dead) {
          setRows(data);
          setReady(true);
        }
      })
      .catch(() => {
        if (!dead) setReady(true);
      });
    return () => {
      dead = true;
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (typing) return;
      const slash = event.key === "/";
      const chord =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (!slash && !chord) return;
      event.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return rows
      .filter((row) => {
        const hay = [row.title, row.line, row.kind, ...row.tags]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
      .slice(0, 8);
  }, [query, rows]);

  return (
    <View style={{ position: "relative", flexGrow: 1, maxWidth: 420 }}>
      <TextInput
        ref={inputRef}
        value={query}
        onChangeText={setQuery}
        placeholder="?"
        placeholderTextColor="#7A7166"
        accessibilityLabel="Search projects, papers, and tags"
        autoCapitalize="none"
        autoCorrect={false}
        className="ksm-search"
        style={{
          borderWidth: 1,
          borderColor: "var(--rule)",
          backgroundColor: "var(--card)",
          color: "var(--ink)",
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderRadius: 0,
        }}
      />
      {query.trim().length > 0 && (
        <View
          className="ksm-palette"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 40,
            backgroundColor: "var(--card)",
            borderWidth: 1,
            borderColor: "var(--rule)",
            marginTop: 4,
          }}
        >
          {!ready && (
            <Text style={{ padding: 10, color: "var(--ink)" }}>Loading the index.</Text>
          )}
          {ready && matches.length === 0 && (
            <Text style={{ padding: 10, color: "var(--ink)" }}>No matches.</Text>
          )}
          {matches.map((row) => (
            <Pressable
              key={row.href + row.title}
              onPress={() => {
                if (row.href.startsWith("http")) {
                  window.location.href = row.href;
                } else {
                  window.location.assign(row.href);
                }
              }}
              style={{ paddingHorizontal: 10, paddingVertical: 8 }}
            >
              <Text style={{ color: "var(--ink)", fontSize: 15 }}>{row.title}</Text>
              <Text style={{ color: "var(--muted)", fontSize: 13 }}>{row.line}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}
