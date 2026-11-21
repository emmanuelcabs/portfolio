import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * The hero's visual anchor: the portrait presented as a faculty ID card.
 * It borrows the most familiar object in a school, so the "educator" half
 * of the identity is legible at a glance, and it suits the ID-style photo.
 *
 * Every line on the card comes from the résumé; edit the rows below if
 * your current role changes.
 */
const rows = [
  { term: "Role", detail: "ICT Coordinator and Flexible Learning Coordinator" },
  { term: "Institution", detail: "Philippine Women’s College of Davao" },
  { term: "Teaching since", detail: "2013" },
];

export function ProfileCard({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "relative w-full max-w-[22rem] overflow-hidden rounded-2xl border border-line bg-surface",
        "shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]",
        "transition-transform duration-500 ease-out-quart lg:-rotate-2 lg:hover:rotate-0",
        className,
      )}
    >
      {/* Lanyard slot */}
      <div
        aria-hidden="true"
        className="mx-auto mt-4 h-2 w-14 rounded-full border border-line bg-base"
      />

      <div className="flex items-end gap-5 px-6 pt-6">
        <Image
          src="/images/profile.png"
          alt={`Portrait of ${site.name}`}
          width={112}
          height={122}
          sizes="112px"
          preload
          className="h-[122px] w-[112px] shrink-0 rounded-lg border border-line object-cover"
        />
        <figcaption className="pb-1">
          <span className="block font-display text-xl leading-tight font-semibold text-fg">
            {site.name}
          </span>
          {site.credentials ? (
            <span className="mt-1 block text-sm text-muted">
              Licensed Professional Teacher
            </span>
          ) : null}
        </figcaption>
      </div>

      <dl className="mx-6 mt-6 divide-y divide-line border-t border-line text-sm">
        {rows.map((row) => (
          <div key={row.term} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
            <dt className="text-subtle">{row.term}</dt>
            <dd className="text-fg">{row.detail}</dd>
          </div>
        ))}
      </dl>

      {/* Colour band, like the strip on a printed ID */}
      <div aria-hidden="true" className="mt-3 h-1.5 bg-accent" />
    </figure>
  );
}
