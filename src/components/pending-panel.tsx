export function PendingPanel({ label }: { label: string }) {
  return (
    <main className="shell py-16">
      <p className="kicker">Reading the hosts</p>
      <h1 className="display mt-4 text-fg">{label}</h1>
      <p className="lede mt-6">
        This page waits on the live check. It does not invent a status while the request is open.
      </p>
    </main>
  );
}
