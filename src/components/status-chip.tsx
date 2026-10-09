import type { Status } from "@/lib/constellation";

export function StatusChip({ status }: { status: Status }) {
  return (
    <span className={`chip chip-${status}`}>
      <span className="chip-dot" aria-hidden="true" />
      {status}
    </span>
  );
}
