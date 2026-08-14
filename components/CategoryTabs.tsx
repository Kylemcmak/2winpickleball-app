import Link from "next/link";
import { categories, type CategoryId } from "@/data/categories";

export function CategoryTabs({ active }: { active?: CategoryId }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
      <Link
        href="/library"
        className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold border ${
          !active
            ? "bg-rust text-white border-rust"
            : "border-line text-ink hover:bg-cream-deep"
        }`}
      >
        All
      </Link>
      {categories.map((c) => (
        <Link
          key={c.id}
          href={`/library?category=${c.id}`}
          className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold border ${
            active === c.id
              ? "bg-rust text-white border-rust"
              : "border-line text-ink hover:bg-cream-deep"
          }`}
        >
          {c.label}
        </Link>
      ))}
    </div>
  );
}
