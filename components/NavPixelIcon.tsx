type IconProps = {
  name: string;
};

export function NavPixelIcon({ name }: IconProps) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    "aria-hidden": true as const,
    shapeRendering: "crispEdges" as const,
  };
  if (name === "home") {
    return (
      <svg {...common}>
        <rect x="2" y="7" width="12" height="7" fill="#2D3561" />
        <rect x="6" y="10" width="4" height="4" fill="#FFB961" />
        <rect x="1" y="7" width="14" height="2" fill="#C05C7E" />
        <rect x="3" y="5" width="10" height="2" fill="#C05C7E" />
        <rect x="6" y="3" width="4" height="2" fill="#F3826F" />
      </svg>
    );
  }
  if (name === "projects") {
    return (
      <svg {...common}>
        <rect x="3" y="2" width="2" height="12" fill="#2D3561" />
        <rect x="5" y="3" width="8" height="5" fill="#6BAA75" />
      </svg>
    );
  }
  if (name === "journal") {
    return (
      <svg {...common}>
        <rect x="3" y="2" width="10" height="12" fill="#2D3561" />
        <rect x="5" y="4" width="6" height="2" fill="#FFB961" />
        <rect x="5" y="8" width="6" height="1" fill="#F3826F" />
      </svg>
    );
  }
  if (name === "archive") {
    return (
      <svg {...common}>
        <rect x="2" y="3" width="12" height="10" fill="#2D3561" />
        <rect x="4" y="5" width="8" height="2" fill="#FFB961" />
        <rect x="4" y="9" width="5" height="1" fill="#6BAA75" />
        <rect x="2" y="2" width="12" height="2" fill="#C05C7E" />
      </svg>
    );
  }
  if (name === "about") {
    return (
      <svg {...common}>
        <rect x="4" y="3" width="8" height="8" fill="#FFB961" />
        <rect x="6" y="6" width="1" height="1" fill="#2D3561" />
        <rect x="9" y="6" width="1" height="1" fill="#2D3561" />
        <rect x="6" y="9" width="4" height="1" fill="#C05C7E" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="7" y="2" width="2" height="6" fill="#2D3561" />
      <rect x="7" y="7" width="6" height="2" fill="#F3826F" />
      <rect x="3" y="3" width="10" height="10" fill="none" stroke="#2D3561" strokeWidth="2" />
    </svg>
  );
}
