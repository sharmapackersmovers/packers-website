/* 2D flat SVG illustrations for each service type */

export function HomeShiftingIcon({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* House */}
      <path d="M12 38 L40 14 L68 38" stroke="#1d4ed8" strokeWidth="3" strokeLinejoin="round" fill="none" />
      <rect x="20" y="38" width="40" height="26" rx="2" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
      {/* Door */}
      <rect x="32" y="50" width="10" height="14" rx="2" fill="#1d4ed8" />
      {/* Windows */}
      <rect x="22" y="42" width="9" height="8" rx="1.5" fill="#93c5fd" />
      <rect x="49" y="42" width="9" height="8" rx="1.5" fill="#93c5fd" />
      {/* Chimney */}
      <rect x="50" y="18" width="8" height="12" rx="1" fill="#1d4ed8" />
      {/* Moving arrow */}
      <path d="M52 66 L64 66 M60 62 L64 66 L60 70" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Box */}
      <rect x="54" y="56" width="10" height="9" rx="1.5" fill="#fed7aa" stroke="#f97316" strokeWidth="1.5" />
      <line x1="54" y1="60.5" x2="64" y2="60.5" stroke="#f97316" strokeWidth="1" />
      <line x1="59" y1="56" x2="59" y2="65" stroke="#f97316" strokeWidth="1" />
    </svg>
  );
}

export function OfficeShiftingIcon({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Building */}
      <rect x="16" y="18" width="48" height="52" rx="3" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2" />
      {/* Roof detail */}
      <rect x="16" y="18" width="48" height="10" rx="3" fill="#4338ca" />
      {/* Windows grid */}
      {[0, 1, 2].map(col =>
        [0, 1, 2].map(row => (
          <rect
            key={`${col}-${row}`}
            x={23 + col * 14} y={34 + row * 11}
            width="9" height="7" rx="1.5"
            fill={row === 0 && col === 1 ? "#fde047" : "#a5b4fc"}
          />
        ))
      )}
      {/* Door */}
      <rect x="32" y="58" width="16" height="12" rx="2" fill="#4338ca" />
      <circle cx="44" cy="65" r="1.5" fill="#a5b4fc" />
      {/* Briefcase */}
      <rect x="52" y="50" width="16" height="12" rx="2.5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
      <path d="M56 50 L56 47 Q56 45 58 45 L66 45 Q68 45 68 47 L68 50" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
      <line x1="52" y1="56" x2="68" y2="56" stroke="#f59e0b" strokeWidth="1" />
      {/* Arrow */}
      <path d="M12 40 L20 40 M17 36 L21 40 L17 44" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CarTransportIcon({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Carrier truck body */}
      <rect x="8" y="44" width="58" height="18" rx="3" fill="#0f172a" />
      <rect x="8" y="44" width="16" height="18" rx="3" fill="#1e3a8a" />
      {/* Windshield */}
      <path d="M10 56 L10 46 Q10 44 12 44 L22 44 L22 54 Z" fill="#60a5fa" opacity="0.8" />
      {/* Carrier flatbed */}
      <rect x="24" y="38" width="42" height="6" rx="2" fill="#334155" />
      <rect x="24" y="32" width="42" height="6" rx="2" fill="#334155" />
      {/* Support struts */}
      <rect x="30" y="32" width="3" height="12" fill="#475569" />
      <rect x="58" y="32" width="3" height="12" fill="#475569" />
      {/* Car on carrier (top) */}
      <rect x="30" y="20" width="34" height="12" rx="6" fill="#3b82f6" />
      <path d="M32 26 Q36 20 40 20 L54 20 Q58 20 62 26 Z" fill="#60a5fa" opacity="0.6" />
      {/* Car windows */}
      <rect x="38" y="22" width="8" height="6" rx="2" fill="#bfdbfe" />
      <rect x="48" y="22" width="8" height="6" rx="2" fill="#bfdbfe" />
      {/* Truck wheels */}
      <circle cx="18" cy="64" r="6" fill="#1e293b" />
      <circle cx="18" cy="64" r="3" fill="#475569" />
      <circle cx="52" cy="64" r="6" fill="#1e293b" />
      <circle cx="52" cy="64" r="3" fill="#475569" />
      {/* Teal accent: insured badge */}
      <rect x="54" y="12" width="18" height="10" rx="5" fill="#0d9488" />
      <text x="63" y="20" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="system-ui">INSURED</text>
    </svg>
  );
}

export function BikeTransportIcon({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Rear wheel */}
      <circle cx="22" cy="54" r="16" fill="none" stroke="#f97316" strokeWidth="3.5" />
      <circle cx="22" cy="54" r="9" fill="none" stroke="#f97316" strokeWidth="2" />
      <circle cx="22" cy="54" r="3" fill="#f97316" />
      {/* Spokes */}
      <line x1="22" y1="38" x2="22" y2="70" stroke="#fb923c" strokeWidth="1.5" />
      <line x1="6" y1="54" x2="38" y2="54" stroke="#fb923c" strokeWidth="1.5" />
      {/* Front wheel */}
      <circle cx="60" cy="54" r="14" fill="none" stroke="#1d4ed8" strokeWidth="3.5" />
      <circle cx="60" cy="54" r="7" fill="none" stroke="#1d4ed8" strokeWidth="2" />
      <circle cx="60" cy="54" r="3" fill="#1d4ed8" />
      <line x1="60" y1="40" x2="60" y2="68" stroke="#3b82f6" strokeWidth="1.5" />
      <line x1="46" y1="54" x2="74" y2="54" stroke="#3b82f6" strokeWidth="1.5" />
      {/* Frame */}
      <path d="M22 54 L36 30 L48 30 L60 54" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 30 L22 54" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 30 L60 54" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
      {/* Seat */}
      <rect x="34" y="26" width="18" height="6" rx="3" fill="#0f172a" />
      {/* Handlebar */}
      <rect x="56" y="24" width="12" height="3.5" rx="1.75" fill="#1e293b" />
      <rect x="55" y="22" width="3.5" height="8" rx="1.75" fill="#334155" />
      {/* Engine */}
      <rect x="34" y="38" width="14" height="10" rx="3" fill="#374151" />
      <rect x="36" y="40" width="10" height="6" rx="2" fill="#4b5563" />
      {/* Exhaust */}
      <path d="M22 56 Q14 58 10 62" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      {/* Windshield */}
      <path d="M56 24 Q52 18 48 20" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WarehouseIcon({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Building */}
      <rect x="8" y="28" width="64" height="44" rx="3" fill="#f0fdf4" stroke="#15803d" strokeWidth="2" />
      {/* Roof */}
      <path d="M5 30 L40 12 L75 30" stroke="#15803d" strokeWidth="2.5" strokeLinejoin="round" fill="#dcfce7" />
      {/* Roof ridge */}
      <line x1="40" y1="12" x2="40" y2="30" stroke="#15803d" strokeWidth="1.5" />
      {/* Big door */}
      <rect x="28" y="50" width="24" height="22" rx="2" fill="#15803d" opacity="0.2" stroke="#15803d" strokeWidth="1.5" />
      {/* Door tracks */}
      <line x1="40" y1="50" x2="40" y2="72" stroke="#15803d" strokeWidth="1" strokeDasharray="3 2" />
      {/* Shelves left */}
      <rect x="10" y="34" width="14" height="2" rx="1" fill="#16a34a" />
      <rect x="10" y="40" width="14" height="2" rx="1" fill="#16a34a" />
      <rect x="11" y="34" width="2" height="8" fill="#16a34a" />
      <rect x="21" y="34" width="2" height="8" fill="#16a34a" />
      {/* Boxes on shelves */}
      <rect x="12" y="31" width="5" height="3" rx="1" fill="#fde68a" />
      <rect x="18" y="31" width="5" height="3" rx="1" fill="#fed7aa" />
      <rect x="12" y="37" width="5" height="3" rx="1" fill="#dbeafe" />
      <rect x="18" y="37" width="5" height="3" rx="1" fill="#fde68a" />
      {/* Shelves right */}
      <rect x="56" y="34" width="14" height="2" rx="1" fill="#16a34a" />
      <rect x="56" y="40" width="14" height="2" rx="1" fill="#16a34a" />
      <rect x="57" y="34" width="2" height="8" fill="#16a34a" />
      <rect x="67" y="34" width="2" height="8" fill="#16a34a" />
      <rect x="58" y="31" width="5" height="3" rx="1" fill="#d1fae5" />
      <rect x="64" y="31" width="5" height="3" rx="1" fill="#fde68a" />
      <rect x="58" y="37" width="5" height="3" rx="1" fill="#fed7aa" />
      <rect x="64" y="37" width="5" height="3" rx="1" fill="#dbeafe" />
      {/* Forklift tiny */}
      <rect x="43" y="60" width="10" height="8" rx="1.5" fill="#334155" />
      <rect x="46" y="55" width="4" height="6" fill="#475569" />
      <rect x="44" y="53" width="8" height="2.5" rx="1" fill="#64748b" />
      <circle cx="44" cy="69" r="2.5" fill="#1e293b" />
      <circle cx="52" cy="69" r="2.5" fill="#1e293b" />
    </svg>
  );
}

export function PackingIcon({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Open box bottom */}
      <path d="M12 46 L12 70 L68 70 L68 46 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
      {/* Box left flap (open) */}
      <path d="M12 46 L8 30 L28 30 L32 46 Z" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Box right flap (open) */}
      <path d="M68 46 L72 30 L52 30 L48 46 Z" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Box front flap (mid open) */}
      <path d="M32 46 L40 32 L48 46 Z" fill="#fed7aa" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Tape strip */}
      <rect x="12" y="55" width="56" height="5" rx="2.5" fill="#fb923c" opacity="0.6" />
      <line x1="40" y1="46" x2="40" y2="70" stroke="#fb923c" strokeWidth="2" opacity="0.6" />
      {/* Bubble wrap texture inside */}
      {[0, 1, 2, 3].map(col =>
        [0, 1].map(row => (
          <circle key={`${col}-${row}`} cx={20 + col * 12} cy={62 + row * 6} r="3.5"
            fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
        ))
      )}
      {/* Tape roll */}
      <circle cx="63" cy="20" r="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="63" cy="20" r="6" fill="#93c5fd" stroke="#3b82f6" strokeWidth="1.5" />
      <circle cx="63" cy="20" r="2.5" fill="#1d4ed8" />
      {/* Tape strip coming off roll */}
      <path d="M51 20 Q46 28 40 30" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Scissors */}
      <path d="M15 22 Q22 28 26 26" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 28 Q22 24 26 26" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
      <circle cx="13" cy="22" r="3.5" fill="none" stroke="#6b7280" strokeWidth="1.5" />
      <circle cx="13" cy="28" r="3.5" fill="none" stroke="#6b7280" strokeWidth="1.5" />
    </svg>
  );
}
