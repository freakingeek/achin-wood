import type { CSSProperties } from "react";

type SplitTextProps = {
  text: string;
  className?: string;
};

export default function SplitText({ text, className }: SplitTextProps) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((character, index) => (
        <span
          aria-hidden="true"
          className="split-letter"
          key={`${character}-${index}`}
          style={{ "--letter-index": index } as CSSProperties}
        >
          {character === " " ? " " : character}
        </span>
      ))}
    </span>
  );
}
