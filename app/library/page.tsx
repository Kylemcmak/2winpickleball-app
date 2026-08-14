import { TopNav } from "@/components/TopNav";
import { CategoryTabs } from "@/components/CategoryTabs";
import { VideoCard } from "@/components/VideoCard";
import { getWatchedIds } from "@/lib/progress";
import { videos } from "@/data/videos";
import type { CategoryId } from "@/data/categories";

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const watched = await getWatchedIds();

  const activeCategory = category as CategoryId | undefined;
  const list = activeCategory
    ? videos.filter((v) => v.category === activeCategory)
    : videos;

  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="serif text-3xl font-semibold mb-1">The Video Library</h1>
        <p className="text-ink-soft mb-6">
          Filmed by Ky &amp; Casey. New videos get added as they&apos;re shot.
        </p>

        <div className="mb-8">
          <CategoryTabs active={activeCategory} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {list.map((v) => (
            <VideoCard key={v.id} video={v} watched={watched.includes(v.id)} />
          ))}
        </div>
      </main>
    </>
  );
}
