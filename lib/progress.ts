import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";

/**
 * v1 progress tracking: no database. Each user's watched-video ids live in
 * their own Clerk publicMetadata. This is intentionally simple — once the
 * app grows to need a coach dashboard or cross-user analytics, that's the
 * signal to add a real database and migrate this out.
 */

type ProgressMetadata = {
  watched?: string[];
};

export async function getWatchedIds(): Promise<string[]> {
  const user = await currentUser();
  if (!user) return [];
  const meta = (user.publicMetadata ?? {}) as ProgressMetadata;
  return meta.watched ?? [];
}

export async function markWatched(videoId: string): Promise<string[]> {
  const { userId } = await auth();
  if (!userId) throw new Error("Not signed in");

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const meta = (user.publicMetadata ?? {}) as ProgressMetadata;
  const current = meta.watched ?? [];

  if (current.includes(videoId)) return current;

  const updated = [...current, videoId];
  await client.users.updateUserMetadata(userId, {
    publicMetadata: { ...meta, watched: updated },
  });

  return updated;
}
