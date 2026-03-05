// ============================================================
// Custom category icon set – monoline, rounded, futuristic
// Each icon uses a 24×24 viewBox with 1.5px stroke
// ============================================================

interface IconProps {
  size?: number;
  className?: string;
}

const base = {
  fill: 'none',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  strokeWidth: '1.5',
};

export function IconTechnology({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M6 8l3 3-3 3M11 14h6" />
    </svg>
  );
}

export function IconAI({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="7" strokeDasharray="2 3" />
    </svg>
  );
}

export function IconEconomy({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M3 20h18M5 20V12M9 20V8M13 20V10M17 20V4" />
      <path d="M17 4l3 3M17 4l-3 2" />
    </svg>
  );
}

export function IconHealth({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M12 21C7 16.5 3 13 3 8.5A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9 3.5c0 4.5-4 8-9 12.5z" />
      <path d="M9 11h6M12 8v6" />
    </svg>
  );
}

export function IconScience({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M9 3v8l-5 9h16l-5-9V3" />
      <path d="M9 3h6M7 18h10" />
      <circle cx="14" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconHistory({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
      <path d="M3.5 9A9 9 0 0 1 21 12" strokeDasharray="2 2" />
    </svg>
  );
}

export function IconTravel({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <circle cx="12" cy="12" r="9" />
      <path d="M2 12h20M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export function IconFood({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M4 11V3M4 11c0 2.2 1.8 4 4 4s4-1.8 4-4V3" />
      <path d="M8 3v8" />
      <path d="M16 3v18M14 3c0 3 4 3 4 6s-4 3-4 6" />
    </svg>
  );
}

export function IconEducation({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M2 10l10-6 10 6-10 6-10-6z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      <path d="M20 10v6" />
      <circle cx="20" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconSociety({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M17 14c2 0 4 1.5 4 4H17" />
    </svg>
  );
}

// ── Icon resolver ─────────────────────────────────────────

const iconMap: Record<string, React.ComponentType<IconProps>> = {
  IconTechnology,
  IconAI,
  IconEconomy,
  IconHealth,
  IconScience,
  IconHistory,
  IconTravel,
  IconFood,
  IconEducation,
  IconSociety,
};

export function CategoryIcon({ name, size = 24, className }: { name: string } & IconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}
