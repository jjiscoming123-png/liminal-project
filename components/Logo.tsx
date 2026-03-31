export default function Logo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Two half-circles that almost meet but don't — the liminal gap */}
      <path d="M20 4 A16 16 0 0 0 20 36" stroke="var(--color-accent, #5b7fff)" strokeWidth="2" fill="none" opacity="0.9"/>
      <path d="M20 4 A16 16 0 0 1 20 36" stroke="var(--color-accent, #5b7fff)" strokeWidth="2" fill="none" opacity="0.3"/>
      <circle cx="20" cy="4" r="1.5" fill="var(--color-accent, #5b7fff)" opacity="0.6"/>
      <circle cx="20" cy="36" r="1.5" fill="var(--color-accent, #5b7fff)" opacity="0.6"/>
    </svg>
  )
}
