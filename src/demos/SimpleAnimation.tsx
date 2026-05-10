import { Anchor, Animate, Color, Rectangle, Slide } from "presenter";
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

const slide = Slide({
  objects: [rectangle],
  animations: [Animate(rectangle, { x: 3000 })],
});

const code = `
import { Animate, Slide } from "presenter";

const rectangle = Rectangle({
  x: 800,
  /* ... (additional properties) */
});

const slide = Slide({
  objects: [rectangle],
  animations: [
    Animate(rectangle, { x: 3000 })
  ],
});
`;

export default function SimpleAnimation() {
  return (
    <div style={{ marginBottom: "1em" }}>
      <div style={{ marginBottom: "1em" }}>
        <PresenterDemo code={code} />
      </div>
      <PresenterDemo slide={slide} showControls />
    </div>
  );
}
