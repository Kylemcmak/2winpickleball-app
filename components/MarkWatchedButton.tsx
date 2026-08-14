"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export function MarkWatchedButton({
  videoId,
  initiallyWatched,
}: {
  videoId: string;
  initiallyWatched: boolean;
}) {
  const [watched, setWatched] = useState(initiallyWatched);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  if (watched) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-olive-tint text-olive px-5 py-3 font-bold text-sm">
        ✓ Watched
      </span>
    );
  }

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const res = await fetch("/api/progress/mark-watched", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ videoId }),
          });
          if (res.ok) {
            setWatched(true);
            router.refresh();
          }
        });
      }}
      className="rounded-full bg-rust hover:bg-rust-deep text-white px-6 py-3 font-bold text-sm disabled:opacity-60"
    >
      {isPending ? "Saving…" : "Mark as Watched"}
    </button>
  );
}
