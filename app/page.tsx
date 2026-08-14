import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { liveVideos, videos } from "@/data/videos";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  const liveCount = liveVideos().length;
  const totalCount = videos.length;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <div className="text-rust font-bold text-xs uppercase tracking-widest mb-4">
          Home Training, Cowboy-Style
        </div>
        <h1 className="serif text-4xl sm:text-5xl font-semibold leading-tight mb-4">
          Train With The Pickleball Cowboy — Between Camps.
        </h1>
        <p className="text-ink-soft text-lg mb-2">
          {liveCount} coaching videos live now, {totalCount - liveCount} more
          on the way. Log in to start watching and tracking your progress.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <SignInButton mode="modal">
            <button className="rounded-full bg-rust hover:bg-rust-deep text-white px-7 py-3 font-bold">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="rounded-full border-2 border-ink px-7 py-3 font-bold">
              Create Account
            </button>
          </SignUpButton>
        </div>
      </div>
    </main>
  );
}
