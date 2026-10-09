export function WaveDivider() {
  return (
    <div className="wave" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0 46c80 18 160 18 240 0s160-18 240 0 160 18 240 0 160-18 240 0 160 18 240 0 160-18 240 0v34H0Z"
          opacity="0.35"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          d="M0 40c80 20 160 20 240 0s160-20 240 0 160 20 240 0 160-20 240 0 160 20 240 0 160-20 240 0"
        />
      </svg>
    </div>
  );
}
