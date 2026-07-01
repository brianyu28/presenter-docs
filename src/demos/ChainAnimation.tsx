import { Anchor, Animate, Circle, Color, Rectangle, Slide } from "presenter";
import PresenterExample from "../components/PresenterExample";
import { scaleY } from "../utils/size";

const square = Rectangle({
  x: 800,
  y: scaleY(0.5),
  width: 800,
  height: 800,
  fillColor: Color.RED,
  anchor: Anchor.CENTER,
});

const circle = Circle({
  x: 3000,
  y: scaleY(0.5),
  radius: 400,
  fillColor: Color.RED,
  anchor: Anchor.CENTER,
  opacity: 0,
});

const slide = Slide({
  objects: [square, circle],
  animations: [
    Animate(square, { x: 3000 }),
    Animate(square, { fillColor: Color.BLUE }),
    Animate(square, { x: 800, fillColor: Color.GREEN }),
    [Animate(square, { opacity: 0 }), Animate(circle, { opacity: 1 })],
  ],
});

const code = `
import { Animate, Color, Slide } from "presenter";

/* ... object definitions ... */

const slide = Slide({
  objects: [square , circle],
  animations: [
    Animate(square, { x: 3000 }),
    Animate(square, { fillColor: Color.BLUE }),
    Animate(square, { x: 800, fillColor: Color.GREEN }),
    [
      Animate(square, { opacity: 0 }),
      Animate(circle, { opacity: 1 })
    ],
  ],
});
`;

export default function ChainAnimation() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
