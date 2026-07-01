import {
  Anchor,
  Animate,
  Circle,
  Color,
  Easing,
  Mask,
  Rectangle,
  Slide,
  Text,
} from "presenter";
import PresenterExample from "../components/PresenterExample";

const movingCircle = Circle({
  x: 900,
  y: 1080,
  radius: 620,
  anchor: Anchor.CENTER,
  fillColor: Color("#60a5fa"),
});

const mask = Mask([movingCircle], {
  x: 1920,
  y: 1080,
  width: 1900,
  height: 900,
  anchor: Anchor.CENTER,
});

const maskOutline = Rectangle({
  x: 1920,
  y: 1080,
  width: 1900,
  height: 900,
  anchor: Anchor.CENTER,
  fillColor: Color(0, 0, 0, 0),
  strokeColor: Color.WHITE,
  strokeWidth: 18,
  cornerRadius: 12,
});

const label = Text("Only content inside the mask is visible", {
  x: 1920,
  y: 350,
  anchor: Anchor.CENTER,
  fontSize: 130,
  color: Color.WHITE,
});

const slide = Slide({
  objects: [label, mask, maskOutline],
  animations: [
    Animate(
      movingCircle,
      { x: 2940, fillColor: Color("#f472b6") },
      { duration: 900, easing: Easing.CUBIC },
    ),
  ],
});

const code = `
import { Anchor, Animate, Circle, Color, Mask, Slide } from "presenter";

const circle = Circle({
  x: 900,
  y: 1080,
  radius: 620,
  anchor: Anchor.CENTER,
  fillColor: Color("#60a5fa"),
});

const mask = Mask([circle], {
  x: 1920,
  y: 1080,
  width: 1900,
  height: 900,
  anchor: Anchor.CENTER,
});

const slide = Slide({
  objects: [mask, /* ... other objects ... */],
  animations: [
    Animate(circle, { x: 2940 }),
  ],
});
`;

export default function MaskClipping() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
