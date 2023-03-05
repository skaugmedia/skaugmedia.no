export function createIcon({ size, glyph }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={`${size ?? 24}`}
      height={`${size ?? 24}`}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none" />
        {glyph}
      </g>
    </svg>
  );
}

export const NextIcon = ({ size, ...props }) =>
  createIcon({
    size,
    glyph: <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />,
    ...props,
  });

export const PrevIcon = ({ size, ...props }) =>
  createIcon({
    size,
    glyph: <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />,
    ...props,
  });
