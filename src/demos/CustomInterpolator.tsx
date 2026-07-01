import {
  Anchor,
  Animate,
  Color,
  Rectangle,
  Slide,
  Text,
  type Interpolator,
} from "presenter";
import PresenterExample from "../components/PresenterExample";

const snapToGrid: Interpolator<number> = {
  check: (value, propertyName): value is number =>
    propertyName === "x" && typeof value === "number",
  interpolate: (from, to, progress) =>
    Math.round((from + (to - from) * progress) / 400) * 400,
};

const box = Rectangle({
  anchor: Anchor.CENTER,
  x: 400,
  y: 1080,
  width: 400,
  height: 400,
  cornerRadius: 50,
  fillColor: Color("#a78bfa"),
});

const label = Text("Snap to a 400 px grid", {
  x: 1920,
  y: 450,
  anchor: Anchor.CENTER,
  color: Color.WHITE,
  fontSize: 180,
});

const slide = Slide({
  objects: [label, box],
  animations: [
    Animate(
      box,
      { x: 3200 },
      {
        duration: 1600,
        interpolators: [snapToGrid],
      },
    ),
  ],
});

const code = `
import { Animate, Slide, type Interpolator } from "presenter";

const snapToGrid: Interpolator<number> = {
  check: (value, propertyName): value is number =>
    propertyName === "x" && typeof value === "number",
  interpolate: (from, to, progress) =>
    Math.round((from + (to - from) * progress) / 400) * 400,
};

const slide = Slide({
  objects: [box],
  animations: [
    Animate(box, { x: 3200 }, {
      duration: 1600,
      interpolators: [snapToGrid],
    }),
  ],
});
`;

export default function CustomInterpolator() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
