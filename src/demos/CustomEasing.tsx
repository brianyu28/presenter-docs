import {
  Anchor,
  Animate,
  Circle,
  Color,
  Slide,
  Text,
  type EasingFunction,
} from "presenter";
import PresenterExample from "../components/PresenterExample";

const bounceAtEnd: EasingFunction = (time) =>
  1 - Math.cos(time * Math.PI * 3) * (1 - time);

const circle = Circle({
  x: 900,
  y: 1200,
  radius: 190,
  anchor: Anchor.CENTER,
  fillColor: Color("#60a5fa"),
});

const label = Text("Custom bounce easing", {
  x: 1920,
  y: 450,
  anchor: Anchor.CENTER,
  color: Color.WHITE,
  fontSize: 180,
});

const slide = Slide({
  objects: [label, circle],
  animations: [
    Animate(
      circle,
      { x: 2500 },
      {
        duration: 1600,
        easing: bounceAtEnd,
      },
    ),
  ],
});

const code = `
import { Animate, Slide, type EasingFunction } from "presenter";

const bounceAtEnd: EasingFunction = (time) =>
  1 - Math.cos(time * Math.PI * 3) * (1 - time);

const slide = Slide({
  objects: [label, circle],
  animations: [
    Animate(circle, { x: 2500 }, {
      duration: 1600,
      easing: bounceAtEnd,
    }),
  ],
});
`;

export default function CustomEasing() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
