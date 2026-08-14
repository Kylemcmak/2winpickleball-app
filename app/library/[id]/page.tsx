import { notFound } from "next/navigation";
import { TopNav } from "@/components/TopNav";
import { MarkWatchedButton } from "@/components/MarkWatchedButton";
import { getWatchedIds } from "@/lib/progress";
import { getVideo, videosByCategory } from "@/data/videos";
import { getCategory } from "@/data/categories";

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = getVideo(id);
  if (!video || video.status !== "live") notFound();

  const category = getCategory(video.category);
  const watched = await getWatchedIds();

  const siblings = videosByCategory(video.category).filter((v) => v.status === "live");
  const currentIndex = siblings.findIndex((v) => v.id === video.id);
  const next = siblings[(currentIndex + 1) % siblings.length];

  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-3xl px-5 py-10">
        <div className="text-xs font-bold uppercase tracking-wide text-rust mb-2">
          {category.label}
        </div>
        <h1 className="serif text-3xl font-semibold mb-6">{video.title}</h1>

        <div className="aspect-video rounded-2xl overflow-hidden bg-ink mb-6">
          <iframe
            src={video.videoUrl}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <div className="rounded-2xl bg-paper border border-line p-5 mb-6">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-soft mb-2">
            Why This Matters
          </div>
          <p className="text-ink leading-relaxed">{video.description}</p>
        </div>

        <MarkWatchedButton
          videoId={video.id}
          initiallyWatched={watched.includes(video.id)}
        />

        {next && next.id !== video.id && (
          <a
            href={`/library/${next.id}`}
            className="mt-10 block rounded-2xl bg-cream-deep p-4 hover:bg-line/50"
          >
            <div className="text-xs font-bold uppercase tracking-wide text-ink-soft mb-1">
              Next Video
            </div>
            <div className="font-bold">{next.title} →</div>
          </a>
        )}
      </main>
    </>
  );
}
