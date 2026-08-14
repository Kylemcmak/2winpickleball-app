import Link from "next/link";
import type { Video } from "@/data/videos";

export function VideoCard({
  video,
  watched,
}: {
  video: Video;
  watched: boolean;
}) {
  const isLive = video.status === "live";

  const inner = (
    <div
      className={`rounded-2xl overflow-hidden bg-ink transition-transform ${
        isLive ? "hover:-translate-y-0.5" : "opacity-60"
      }`}
    >
      <div className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-[#3E2C1C] to-[#1D1611]">
        <span
          className={`absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wide px-2 py-1 rounded-full ${
            isLive ? "bg-olive text-white" : "bg-cream-deep text-ink-soft"
          }`}
        >
          {isLive ? (watched ? "Watched" : "New") : "Coming Soon"}
        </span>
        {isLive && (
          <span className="w-11 h-11 rounded-full bg-rust flex items-center justify-center text-white text-sm">
            ▶
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="text-[10px] uppercase tracking-wide text-sand font-bold">
          {video.category.replace("-", " ")}
        </div>
        <div className="text-sm font-bold text-white mt-1 leading-snug">
          {video.title}
        </div>
      </div>
    </div>
  );

  if (!isLive) {
    return <div aria-disabled="true">{inner}</div>;
  }

  return <Link href={`/library/${video.id}`}>{inner}</Link>;
}
