export default function MovingTruck() {
  return (
    <div className="relative w-full select-none animate-truck-slide-in">
      <svg
        viewBox="0 0 580 290"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-full drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0c4a6e" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="cargoGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="cabGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <radialGradient id="headlightGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Sky background ─────────────────────────────── */}
        <rect width="580" height="218" fill="url(#skyGrad)" rx="20" />

        {/* ── Stars ──────────────────────────────────────── */}
        {[
          [40, 18, 1.5], [92, 32, 1], [155, 14, 1.8], [215, 42, 1],
          [285, 18, 1.5], [355, 36, 1], [425, 11, 1.8], [495, 27, 1],
          [545, 40, 1.5], [68, 58, 1], [182, 52, 1.2], [325, 62, 1],
          [465, 53, 1.2], [135, 38, 0.8], [380, 20, 0.8], [510, 55, 1],
        ].map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="white" opacity={0.4 + (i % 4) * 0.12} />
        ))}

        {/* ── City silhouette ────────────────────────────── */}
        <g opacity="0.18" fill="#3b82f6">
          <rect x="14" y="112" width="36" height="106" />
          <rect x="55" y="82" width="44" height="136" />
          <rect x="105" y="98" width="28" height="120" />
          <rect x="138" y="62" width="42" height="156" />
          <rect x="185" y="88" width="33" height="130" />
          {/* Windows left */}
          <rect x="60" y="90" width="9" height="7" fill="#93c5fd" opacity="0.7" />
          <rect x="74" y="90" width="9" height="7" fill="#93c5fd" opacity="0.7" />
          <rect x="60" y="103" width="9" height="7" fill="#93c5fd" opacity="0.3" />
          <rect x="74" y="103" width="9" height="7" fill="#93c5fd" opacity="0.7" />
          <rect x="144" y="70" width="11" height="9" fill="#93c5fd" opacity="0.7" />
          <rect x="161" y="70" width="11" height="9" fill="#93c5fd" opacity="0.3" />
          <rect x="144" y="85" width="11" height="9" fill="#93c5fd" opacity="0.5" />
          {/* Right buildings */}
          <rect x="398" y="92" width="40" height="126" />
          <rect x="444" y="68" width="52" height="150" />
          <rect x="502" y="82" width="36" height="136" />
          <rect x="540" y="98" width="40" height="120" />
          <rect x="450" y="76" width="9" height="7" fill="#93c5fd" opacity="0.7" />
          <rect x="465" y="76" width="9" height="7" fill="#93c5fd" opacity="0.3" />
          <rect x="450" y="89" width="9" height="7" fill="#93c5fd" opacity="0.5" />
          <rect x="465" y="89" width="9" height="7" fill="#93c5fd" opacity="0.7" />
        </g>

        {/* ── Road ───────────────────────────────────────── */}
        <rect x="0" y="215" width="580" height="75" fill="url(#roadGrad)" />
        {/* Orange accent line at road top */}
        <rect x="0" y="215" width="580" height="4" fill="#f97316" opacity="0.65" />
        {/* Shoulder */}
        <rect x="0" y="276" width="580" height="3" fill="#475569" opacity="0.6" />

        {/* Animated road dashes */}
        <g style={{ animation: "moveDash 1.1s linear infinite" }}>
          {[-80, 0, 80, 160, 240, 320, 400, 480, 560].map((x, i) => (
            <rect key={i} x={x} y="242" width="55" height="5" rx="2.5" fill="#334155" />
          ))}
        </g>

        {/* ── Truck cargo body ───────────────────────────── */}
        <rect x="136" y="88" width="268" height="105" rx="6" fill="url(#cargoGrad)" />
        {/* Top highlight stripe */}
        <rect x="136" y="88" width="268" height="15" rx="6" fill="#fb923c" />
        {/* Panel detail: vertical edges */}
        <rect x="139" y="88" width="3.5" height="105" fill="#c2410c" opacity="0.6" />
        <rect x="400" y="88" width="3.5" height="105" fill="#9a3412" opacity="0.6" />
        {/* Horizontal panel line */}
        <rect x="136" y="140" width="268" height="2.5" fill="#c2410c" opacity="0.45" />
        {/* Logo / branding */}
        <text
          x="270" y="122"
          textAnchor="middle" fill="white"
          fontSize="15" fontWeight="bold"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1"
        >
          SHARMA PACKERS
        </text>
        <text
          x="270" y="138"
          textAnchor="middle" fill="#fed7aa"
          fontSize="10"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          &amp; MOVERS
        </text>
        {/* Tagline strip */}
        <rect x="155" y="148" width="230" height="18" rx="4" fill="#c2410c" opacity="0.35" />
        <text
          x="270" y="160"
          textAnchor="middle" fill="#fed7aa"
          fontSize="8.5"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Pan India Service  •  GPS Tracked  •  100% Insured
        </text>
        {/* Cargo door rear detail */}
        <line x1="136" y1="103" x2="136" y2="193" stroke="#9a3412" strokeWidth="1" opacity="0.5" />
        <line x1="404" y1="103" x2="404" y2="193" stroke="#9a3412" strokeWidth="1" opacity="0.5" />

        {/* ── Truck cab ──────────────────────────────────── */}
        {/* Cab body shape */}
        <path
          d="M84,108 Q84,98 96,98 L136,98 L136,193 L84,193 Z"
          fill="url(#cabGrad)"
        />
        {/* Cab roof curve detail */}
        <path d="M84,108 Q84,98 96,98 L136,98 L136,110 Q110,108 84,112 Z" fill="#2563eb" opacity="0.4" />
        {/* Windshield glass */}
        <path
          d="M91,110 Q91,104 97,104 L130,104 L130,152 L91,152 Z"
          fill="#bfdbfe" opacity="0.9"
        />
        {/* Glass tint top */}
        <path
          d="M91,104 L130,104 L130,122 Q110,118 91,123 Z"
          fill="#60a5fa" opacity="0.25"
        />
        {/* Windshield glint */}
        <line x1="95" y1="108" x2="108" y2="108" stroke="white" strokeWidth="1.8" opacity="0.5" strokeLinecap="round" />
        {/* Cab door area */}
        <rect x="89" y="156" width="44" height="30" rx="3" fill="#1e3a8a" />
        <rect x="92" y="159" width="38" height="24" rx="2" fill="#1d4ed8" opacity="0.5" />
        {/* Door handle */}
        <rect x="106" y="170" width="14" height="3.5" rx="1.8" fill="#60a5fa" />
        {/* Exhaust pipe */}
        <rect x="84" y="86" width="8" height="24" rx="4" fill="#475569" />
        <rect x="85" y="83" width="6" height="8" rx="3" fill="#64748b" />
        {/* Headlight cone */}
        <ellipse cx="83" cy="178" rx="30" ry="8" fill="url(#headlightGlow)" opacity="0.25" />
        {/* Headlight */}
        <ellipse cx="83" cy="178" rx="10" ry="8" fill="#fef9c3" />
        <ellipse cx="83" cy="178" rx="7" ry="5.5" fill="#fde047" />
        <ellipse cx="83" cy="178" rx="3.5" ry="3" fill="#fbbf24" filter="url(#glow)" />
        {/* Bumper grill */}
        <rect x="83" y="186" width="50" height="12" rx="3" fill="#0f172a" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={86 + i * 9} y="188" width="6" height="8" rx="1.5" fill="#1e293b" />
        ))}
        {/* Front step */}
        <rect x="83" y="198" width="32" height="5" rx="2.5" fill="#334155" />
        {/* Side mirror arm + mirror */}
        <rect x="73" y="138" width="12" height="3" rx="1.5" fill="#1e3a8a" />
        <rect x="68" y="132" width="14" height="11" rx="3" fill="#2563eb" />
        <rect x="69" y="133" width="12" height="4" rx="2" fill="#3b82f6" opacity="0.6" />

        {/* ── Rear wheel ─────────────────────────────────── */}
        <ellipse cx="342" cy="212" rx="38" ry="12" fill="#0f172a" opacity="0.35" />
        <circle cx="342" cy="205" r="33" fill="#0f172a" />
        <circle cx="342" cy="205" r="24" fill="#1e293b" />
        {/* Tire tread */}
        <circle cx="342" cy="205" r="31" fill="none" stroke="#334155" strokeWidth="3.5" strokeDasharray="9 5" />
        {/* Rim */}
        <circle cx="342" cy="205" r="11" fill="#475569" />
        <circle cx="342" cy="205" r="5.5" fill="#64748b" />
        {/* Spokes — spinning */}
        <g style={{ transformOrigin: "342px 205px", animation: "spinWheel 1.8s linear infinite" }}>
          <rect x="340" y="175" width="4" height="60" rx="2" fill="#334155" />
          <rect x="312" y="203" width="60" height="4" rx="2" fill="#334155" />
          <rect x="320" y="183" width="44" height="3" rx="1.5" fill="#2d3748"
            style={{ transform: "rotate(45deg)", transformOrigin: "342px 205px" }} />
          <rect x="320" y="219" width="44" height="3" rx="1.5" fill="#2d3748"
            style={{ transform: "rotate(-45deg)", transformOrigin: "342px 205px" }} />
        </g>

        {/* ── Front wheel ────────────────────────────────── */}
        <ellipse cx="117" cy="212" rx="30" ry="10" fill="#0f172a" opacity="0.35" />
        <circle cx="117" cy="205" r="28" fill="#0f172a" />
        <circle cx="117" cy="205" r="20" fill="#1e293b" />
        <circle cx="117" cy="205" r="26" fill="none" stroke="#334155" strokeWidth="3" strokeDasharray="8 4" />
        <circle cx="117" cy="205" r="9" fill="#475569" />
        <circle cx="117" cy="205" r="4.5" fill="#64748b" />
        {/* Spokes — spinning */}
        <g style={{ transformOrigin: "117px 205px", animation: "spinWheel 1.8s linear infinite" }}>
          <rect x="115" y="179" width="4" height="52" rx="2" fill="#334155" />
          <rect x="91" y="203" width="52" height="4" rx="2" fill="#334155" />
        </g>

        {/* ── Floating boxes ─────────────────────────────── */}
        <g style={{ animation: "floatBox 3.2s ease-in-out infinite" }}>
          <rect x="440" y="46" width="48" height="48" rx="5" fill="#fef3c7" />
          <rect x="440" y="46" width="48" height="13" rx="5" fill="#fde68a" />
          <line x1="440" y1="70" x2="488" y2="70" stroke="#f59e0b" strokeWidth="2.5" />
          <line x1="464" y1="46" x2="464" y2="94" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="464" y="44" fontSize="11" fill="#d97706" textAnchor="middle" fontFamily="system-ui">📦</text>
        </g>
        <g style={{ animation: "floatBox2 3.8s ease-in-out infinite 1s" }}>
          <rect x="500" y="22" width="38" height="38" rx="4" fill="#dbeafe" />
          <rect x="500" y="22" width="38" height="11" rx="4" fill="#bfdbfe" />
          <line x1="500" y1="41" x2="538" y2="41" stroke="#3b82f6" strokeWidth="2" />
          <line x1="519" y1="22" x2="519" y2="60" stroke="#3b82f6" strokeWidth="2" />
        </g>
        <g style={{ animation: "floatBox 4s ease-in-out infinite 1.8s" }}>
          <rect x="468" y="10" width="28" height="28" rx="3" fill="#d1fae5" />
          <line x1="468" y1="24" x2="496" y2="24" stroke="#10b981" strokeWidth="1.8" />
          <line x1="482" y1="10" x2="482" y2="38" stroke="#10b981" strokeWidth="1.8" />
        </g>

        {/* ── Exhaust smoke ──────────────────────────────── */}
        <circle cx="88" cy="80" r="5" fill="#94a3b8"
          style={{ animation: "smokePuff 2.2s ease-out infinite", opacity: 0 }} />
        <circle cx="82" cy="67" r="7.5" fill="#94a3b8"
          style={{ animation: "smokePuff 2.2s ease-out infinite 0.5s", opacity: 0 }} />
        <circle cx="77" cy="55" r="6.5" fill="#94a3b8"
          style={{ animation: "smokePuff 2.2s ease-out infinite 1.1s", opacity: 0 }} />

        {/* ── GPS pin above cab ──────────────────────────── */}
        <g style={{ animation: "gpsPing 2.5s ease-in-out infinite" }}>
          {/* Ping ring */}
          <circle cx="110" cy="88" r="14" fill="none" stroke="#3b82f6" strokeWidth="2"
            style={{ animation: "gpsPingRing 2s ease-out infinite", opacity: 0.5 }} />
          {/* Pin */}
          <circle cx="110" cy="85" r="9" fill="#2563eb" />
          <circle cx="110" cy="85" r="4.5" fill="white" />
          <path d="M110,93 L107,100 L110,97 L113,100 Z" fill="#2563eb" />
        </g>

        {/* ── Speed lines (left of cab) ──────────────────── */}
        <line x1="62" y1="140" x2="0" y2="140" stroke="white" strokeWidth="2" opacity="0.1" strokeLinecap="round" />
        <line x1="55" y1="152" x2="0" y2="152" stroke="white" strokeWidth="1.5" opacity="0.07" strokeLinecap="round" />
        <line x1="70" y1="162" x2="0" y2="162" stroke="white" strokeWidth="2.5" opacity="0.06" strokeLinecap="round" />
      </svg>

      {/* ── Floating stat chips ────────────────────────── */}
      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full" style={{ animation: "trustPulse 2s ease-in-out infinite" }} />
        <span className="text-white text-xs font-semibold">Live GPS Tracking</span>
      </div>
      <div className="absolute bottom-16 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 text-center">
        <p className="text-white/60 text-[10px] leading-none mb-0.5">Delivered Safe</p>
        <p className="text-white text-sm font-bold">25,000+</p>
      </div>
    </div>
  );
}
