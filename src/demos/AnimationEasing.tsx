import { Anchor, Animate, Circle, Color, Easing, Slide, Text } from "presenter";
import PresenterExample from "../components/PresenterExample";

const BLUE = Color(125, 157, 224);

const positions = [700, 1800];

const dots = positions.map((y) =>
  Circle({
    x: 500,
    y,
    radius: 170,
    anchor: Anchor.CENTER,
    fillColor: BLUE,
  }),
);

const label1 = Text("Linear Interpolation", {
  x: 330,
  y: positions[0] - 400,
  anchor: Anchor.LEFT,
  color: Color.WHITE,
  fontSize: 180,
});

const label2 = Text("Cubic Interpolation", {
  x: 330,
  y: positions[1] - 400,
  anchor: Anchor.LEFT,
  color: Color.WHITE,
  fontSize: 180,
});

const slide = Slide({
  objects: [...dots, label1, label2],
  animations: [
    Animate(dots[0], { x: 3340 }),
    Animate(dots[1], { x: 3340 }, { easing: Easing.CUBIC }),
    Animate(dots[0], { x: 500 }),
    Animate(dots[1], { x: 500 }, { easing: Easing.CUBIC }),
  ],
});

const code = `
  const slide = Slide({
    objects: [circle1, circle2, label1, label2],
    animations: [
      Animate(circle1, { x: 3340 }),
      Animate(circle2, { x: 3340 }, { easing: Easing.CUBIC }),
      Animate(circle1, { x: 500 }),
      Animate(circle2, { x: 500 }, { easing: Easing.CUBIC }),
    ],
  });
`;

export default function AnimationEasing() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
