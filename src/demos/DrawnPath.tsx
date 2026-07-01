import { Anchor, Animate, Color, Path, Slide, Transparent } from "presenter";
import PresenterExample from "../components/PresenterExample";

const STAR_PATH =
  "M 50 6.58 L 60.78 39.75 L 95.65 39.75 L 67.44 60.25 L 78.21 93.42 L 50 72.92 L 21.79 93.42 L 32.56 60.25 L 4.35 39.75 L 39.22 39.75 Z";

const star = Path({
  path: STAR_PATH,
  x: 1920,
  y: 1080,
  width: 1800,
  height: 1800,
  viewboxWidth: 100,
  viewboxHeight: 100,
  anchor: Anchor.CENTER,
  drawn: 0,
  fillColor: Transparent(Color("#fde68a")),
  strokeColor: Color("#fde68a"),
  strokeWidth: 2,
  isRounded: true,
});

const slide = Slide({
  objects: [star],
  animations: [
    [
      Animate(star, { drawn: 1 }, { block: true }),
      Animate(star, { fillColor: Color("#fde68a") }, { duration: 500 }),
    ],
  ],
});

const code = `
import { Animate, Color, Slide } from "presenter";

const slide = Slide({
  objects: [star],
  animations: [
    [
      Animate(star, { drawn: 1 }, { block: true }),
      Animate(star, { fillColor: Color("#fde68a") }, { duration: 500 }),
    ],
  ],
});
`;

export default function DrawnPath() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
