import { Anchor, Animate, Circle, Color, Rectangle, Slide } from "presenter";
import PresenterDemo from "../components/PresenterDemo";
import { scaleY } from "../utils/size";

const rectangle = Rectangle({
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
  objects: [rectangle, circle],
  animations: [
    Animate(rectangle, { x: 3000 }),
    Animate(rectangle, { fillColor: Color.BLUE }),
    Animate(rectangle, { x: 800, fillColor: Color.GREEN }),
    [Animate(rectangle, { opacity: 0 }), Animate(circle, { opacity: 1 })],
  ],
});

const code = `
/* ... (object definitions) */

const slide = Slide({
  objects: [rectangle, circle],
  animations: [
    Animate(rectangle, { x: 3000 }),
    Animate(rectangle, { fillColor: Color.BLUE }),
    Animate(rectangle, { x: 800, fillColor: Color.GREEN }),
    [
      Animate(rectangle, { opacity: 0 }),
      Animate(circle, { opacity: 1 })
    ],
  ],
});
`;

export default function ChainAnimation() {
  return (
    <div style={{ marginBottom: "1em" }}>
      <div style={{ marginBottom: "1em" }}>
        <PresenterDemo code={code} />
      </div>
      <PresenterDemo slide={slide} showControls />
    </div>
  );
}
