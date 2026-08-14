import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <header className="border-b border-line bg-paper/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-5xl px-5 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="serif font-semibold text-lg">
          2Win<span className="text-rust">Pickleball</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link href="/dashboard" className="hover:text-rust">
            Dashboard
          </Link>
          <Link href="/library" className="hover:text-rust">
            Library
          </Link>
          <UserButton />
        </nav>
      </div>
    </header>
  );
}
