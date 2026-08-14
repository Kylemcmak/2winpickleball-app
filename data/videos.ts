import type { CategoryId } from "./categories";

export type VideoStatus = "live" | "coming-soon";

export type Video = {
  id: string;
  title: string;
  category: CategoryId;
  status: VideoStatus;
  /** Plain-language explanation shown next to the player, Limber-Health style. */
  description: string;
  /**
   * Public URL the <video> player streams from. Starts out pointing at
   * Google Drive's /preview embed (zero setup) — swap each one for its
   * Vercel Blob URL after running `node scripts/migrate-to-blob.mjs`.
   * Only present when status is "live".
   */
  videoUrl?: string;
};

export const videos: Video[] = [
  // ---- LIVE — filmed and edited, from 02_EDITED_VIDEO ----
  {
    id: "ready-position",
    title: "Ready Position",
    category: "foundation",
    status: "live",
    description:
      "You don't get into ready position once — you return to it after every single shot. Balance, Move, Hit, Balance. That cycle is the foundation of everything.",
    videoUrl:
      "https://drive.google.com/file/d/1oggMjnCPqAuTe94y33McjpezPPcu3ple/preview",
  },
  {
    id: "posture",
    title: "Posture (Gorilla Chest)",
    category: "foundation",
    status: "live",
    description:
      "Knees over toes, chest over knees. Not hunched, not butt-out. Like a gorilla in a ready stance. This posture unlocks balance, footwork, and every other mechanic.",
    videoUrl:
      "https://drive.google.com/file/d/1MsD5gu9P-YlHlF4MSCiolxb6wNqdKgpA/preview",
  },
  {
    id: "split-step",
    title: "The Split Step",
    category: "foundation",
    status: "live",
    description:
      "Time a small hop to land just as your opponent makes contact. You're already in motion when the ball leaves their paddle. That's where reaction time is won.",
    videoUrl:
      "https://drive.google.com/file/d/1fSppcIQ8zbhqwAVXuxBi1GTuNqJCHnIb/preview",
  },
  {
    id: "strike-zone",
    title: "Strike Zone",
    category: "foundation",
    status: "live",
    description: "Add your explanation here — what this teaches and why it matters.",
    videoUrl:
      "https://drive.google.com/file/d/1ICULRakvDKgWTaANzKIs8pDHNJ7H5KTY/preview",
  },
  {
    id: "serve-basic",
    title: "Serve — Basic",
    category: "foundation",
    status: "live",
    description: "Add your explanation here — what this teaches and why it matters.",
    videoUrl:
      "https://drive.google.com/file/d/13i098NtHqdBqeqGtM6mFK-EJgWNIMWo9/preview",
  },
  {
    id: "return-basic",
    title: "Return — Basic",
    category: "foundation",
    status: "live",
    description: "Add your explanation here — what this teaches and why it matters.",
    videoUrl:
      "https://drive.google.com/file/d/11uutVhE82IgKR_O4UpvgNY4WHHJaAU1e/preview",
  },
  {
    id: "return-whole-body",
    title: "Return — Whole Body & Legs",
    category: "foundation",
    status: "live",
    description: "Add your explanation here — what this teaches and why it matters.",
    videoUrl:
      "https://drive.google.com/file/d/1ovTexE56SHVMx2-mua-1K2QQPjmlwKZt/preview",
  },
  {
    id: "follow-through",
    title: "Follow Through",
    category: "foundation",
    status: "live",
    description: "Add your explanation here — what this teaches and why it matters.",
    videoUrl:
      "https://drive.google.com/file/d/12CV52i65oeIDtWtmZMNSgApQoyYzyFkQ/preview",
  },
  {
    id: "topspin-forehand-drive",
    title: "Topspin Forehand Drive",
    category: "third-shot",
    status: "live",
    description: "Add your explanation here — what this teaches and why it matters.",
    videoUrl:
      "https://drive.google.com/file/d/1tjyQ_lnQb2AIV8VSAh-Iyo-vTAy5Yhg4/preview",
  },
  {
    id: "third-shot-basic",
    title: "Third Shot — Basic",
    category: "third-shot",
    status: "live",
    description: "Add your explanation here — what this teaches and why it matters.",
    videoUrl:
      "https://drive.google.com/file/d/1SXCZrobEYo64MEP07etPE39JTyaZwzVT/preview",
  },

  // ---- COMING SOON — placeholders from the 100 Puzzle Pieces roadmap ----
  // Titled from the roadmap so the library feels alive. Fill in `videoUrl`
  // and flip `status` to "live" once each one is filmed and migrated.
  { id: "wider-than-you-think", title: "Wider Than You Think", category: "foundation", status: "coming-soon", description: "Coming soon." },
  { id: "beat-the-bounce", title: "Beat the Bounce", category: "foundation", status: "coming-soon", description: "Coming soon." },
  { id: "the-lunge-step", title: "The Lunge Step", category: "foundation", status: "coming-soon", description: "Coming soon." },

  { id: "own-the-line", title: "Own the Line", category: "kitchen-game", status: "coming-soon", description: "Coming soon." },
  { id: "ten-oclock-paddle", title: "Ten O'Clock Paddle", category: "kitchen-game", status: "coming-soon", description: "Coming soon." },
  { id: "reset-below-the-knee", title: "Reset Below the Knee", category: "kitchen-game", status: "coming-soon", description: "Coming soon." },

  { id: "four-kinds-of-drops", title: "Four Kinds of Drops", category: "third-shot", status: "coming-soon", description: "Coming soon." },
  { id: "paddle-down-open-palm", title: "Paddle Down, Open Palm", category: "third-shot", status: "coming-soon", description: "Coming soon." },

  { id: "moving-wedges", title: "Moving Wedges", category: "movement", status: "coming-soon", description: "Coming soon." },
  { id: "cover-their-feet", title: "Cover Their Feet", category: "movement", status: "coming-soon", description: "Coming soon." },

  { id: "read-the-equation", title: "Read the Equation", category: "mental-game", status: "coming-soon", description: "Coming soon." },
  { id: "play-chess-not-checkers", title: "Play Chess, Not Checkers", category: "mental-game", status: "coming-soon", description: "Coming soon." },
];

export function getVideo(id: string): Video | undefined {
  return videos.find((v) => v.id === id);
}

export function liveVideos(): Video[] {
  return videos.filter((v) => v.status === "live");
}

export function videosByCategory(category: CategoryId): Video[] {
  return videos.filter((v) => v.category === category);
}
