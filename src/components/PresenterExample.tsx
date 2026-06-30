import { type Color, type Slide } from "presenter";
import type { ReactNode } from "react";
import PresenterDemo from "./PresenterDemo";

interface PresenterExampleProps {
  readonly backgroundColor?: Color;
  readonly code: string;
  readonly images?: Readonly<Record<string, string>>;
  readonly showControls?: boolean;
  readonly slide: Slide;
}

export default function PresenterExample({
  backgroundColor,
  code,
  images,
  showControls = false,
  slide,
}: PresenterExampleProps): ReactNode {
  return (
    <div style={{ marginBottom: "1em" }}>
      <div style={{ marginBottom: "1em" }}>
        <PresenterDemo code={code} />
      </div>
      <PresenterDemo
        backgroundColor={backgroundColor}
        images={images}
        slide={slide}
        showControls={showControls}
      />
    </div>
  );
}
