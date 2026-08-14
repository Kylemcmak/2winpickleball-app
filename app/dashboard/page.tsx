import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { TopNav } from "@/components/TopNav";
import { getWatchedIds } from "@/lib/progress";
import { liveVideos } from "@/data/videos";
import { getCategory } from "@/data/categories";

export default async function DashboardPage() {
  const user = await currentUser();
  const watched = await getWatchedIds();
  const live = liveVideos();
  const nextUp = live.find((v) => !watched.includes(v.id)) ?? live[0];

  const firstName = user?.firstName ?? "there";

  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="serif text-3xl font-semibold mb-1">
          Welcome back, {firstName}
        </h1>
        <p className="text-ink-soft mb-8">
          {watched.length} of {live.length} videos watched
        </p>

        <div className="w-full h-2 bg-cream-deep rounded-full overflow-hidden mb-10">
          <div
            className="h-full bg-rust"
            style={{
              width: `${live.length ? (watched.length / live.length) * 100 : 0}%`,
            }}
          />
        </div>

        {nextUp && (
          <div className="mb-10">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-soft mb-3">
              Continue Training
            </div>
            <Link
              href={`/library/${nextUp.id}`}
              className="block rounded-2xl bg-ink text-white p-5 flex items-center gap-4 hover:opacity-90"
            >
              <span className="w-11 h-11 rounded-full bg-rust flex items-center justify-center shrink-0">
                ▶
              </span>
              <span>
                <span className="block font-bold">{nextUp.title}</span>
                <span className="block text-sand text-sm mt-0.5">
                  {getCategory(nextUp.category).label} · Live now
                </span>
              </span>
            </Link>
          </div>
        )}

        <Link
          href="/library"
          className="inline-block rounded-full border-2 border-ink px-6 py-3 font-bold"
        >
          Browse Full Library →
        </Link>
      </main>
    </>
  );
}
