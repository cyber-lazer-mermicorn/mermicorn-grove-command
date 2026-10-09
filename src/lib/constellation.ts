export type Lane =
  | "stay"
  | "identity"
  | "travel"
  | "vehicles"
  | "play"
  | "studio"
  | "collect"
  | "learn"
  | "commerce";

export type Status = "ready" | "partial" | "missing" | "unreachable";

export type Vertical = {
  id: string;
  name: string;
  lane: Lane;
  laneLabel: string;
  summary: string;
  href: string;
  repo: string;
};

export const RENTAL_HEALTH_URL =
  "https://cherry-rental-engine-o7.vercel.app/api/health";

export const COMMERCE_URL = "https://mermicorn-commerce-ai.vercel.app";

/** Public hosts only. Status is never stored here — it is probed per request. */
export const VERTICALS: readonly Vertical[] = [
  {
    id: "rental",
    name: "Rental",
    lane: "stay",
    laneLabel: "Stay",
    summary:
      "Hand-selected Honolulu stays. Connector health is read from /api/health on this host.",
    href: "https://cherry-rental-engine-o7.vercel.app",
    repo: "https://github.com/cyber-lazer-mermicorn/cherry-rental-engine",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    lane: "identity",
    laneLabel: "Identity",
    summary: "Public portfolio deployment for the operator.",
    href: "https://cherry-portfolio.vercel.app",
    repo: "https://github.com/cyber-lazer-mermicorn/cherry-portfolio",
  },
  {
    id: "deals",
    name: "Deal finder",
    lane: "travel",
    laneLabel: "Travel",
    summary: "Travel deal lab. The live document identifies Honolulu as home.",
    href: "https://ai-deal-finder.vercel.app",
    repo: "https://github.com/cyber-lazer-mermicorn/ai-deal-finder",
  },
  {
    id: "auto",
    name: "Auto matchmaker",
    lane: "vehicles",
    laneLabel: "Vehicles",
    summary: "Vehicle deal scoring for the operator’s matchmaker.",
    href: "https://cherry-auto-matchmaker.vercel.app",
    repo: "https://github.com/cyber-lazer-mermicorn/cherry-auto-matchmaker",
  },
  {
    id: "rift",
    name: "Rift",
    lane: "play",
    laneLabel: "Play",
    summary:
      "Wild Rift lab: champion notes and meta writing. Riot’s marks stay with Riot.",
    href: "https://cherry-rift-lab.vercel.app",
    repo: "https://github.com/cyber-lazer-mermicorn/cherry-rift-lab",
  },
  {
    id: "ravewear",
    name: "Ravewear",
    lane: "studio",
    laneLabel: "Studio",
    summary: "Ravewear studio for the operator’s clothing drops.",
    href: "https://cherry-ravewear-studio.vercel.app",
    repo: "https://github.com/cyber-lazer-mermicorn/cherry-ravewear-studio",
  },
  {
    id: "numismatic",
    name: "Numismatic",
    lane: "collect",
    laneLabel: "Collect",
    summary: "Coin intake, attribution, and auction lab.",
    href: "https://cherry-numismatic-auction-lab.vercel.app",
    repo: "https://github.com/cyber-lazer-mermicorn/cherry-numismatic-auction-lab",
  },
  {
    id: "chance",
    name: "Chance",
    lane: "play",
    laneLabel: "Play",
    summary:
      "Games-of-chance research: mechanics and session tools, not a cashier.",
    href: "https://cherry-chance-game-lab.vercel.app",
    repo: "https://github.com/cyber-lazer-mermicorn/cherry-chance-game-lab",
  },
  {
    id: "apprenticeship",
    name: "Operator apprenticeship",
    lane: "learn",
    laneLabel: "Learn",
    summary: "Training ladder for operator-level AI skills.",
    href: "https://cherry-operator-apprenticeship.vercel.app",
    repo: "https://github.com/cyber-lazer-mermicorn/cherry-operator-apprenticeship",
  },
  {
    id: "commerce",
    name: "Commerce",
    lane: "commerce",
    laneLabel: "Commerce",
    summary:
      "Shared listing and product service. Kept on the map so a dead deploy is visible.",
    href: COMMERCE_URL,
    repo: "https://github.com/cyber-lazer-mermicorn/mermicorn-commerce-ai",
  },
];

export const LANES: { id: Lane | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "stay", label: "Stay" },
  { id: "travel", label: "Travel" },
  { id: "vehicles", label: "Vehicles" },
  { id: "studio", label: "Studio" },
  { id: "collect", label: "Collect" },
  { id: "play", label: "Play" },
  { id: "learn", label: "Learn" },
  { id: "commerce", label: "Commerce" },
  { id: "identity", label: "Identity" },
];

export const CONNECTORS: { id: string; label: string }[] = [
  { id: "supabase", label: "Supabase" },
  { id: "stripe", label: "Stripe" },
  { id: "resend", label: "Resend" },
  { id: "calendly", label: "Calendly" },
  { id: "ical", label: "iCal" },
  { id: "cron", label: "Cron" },
  { id: "google_calendar", label: "Google Calendar" },
];

export function healthTimeoutMs(): number {
  const raw = Number(process.env.HEALTH_TIMEOUT_MS ?? "4000");
  if (!Number.isFinite(raw)) return 4000;
  return Math.min(8000, Math.max(1000, Math.round(raw)));
}

export function rentalHealthUrl(): string {
  const fromEnv = process.env.RENTAL_HEALTH_URL?.trim();
  if (fromEnv && /^https:\/\/[^\s]+$/i.test(fromEnv)) return fromEnv;
  return RENTAL_HEALTH_URL;
}
