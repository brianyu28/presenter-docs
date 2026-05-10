import { Circle, Color, Rectangle, Slide } from "presenter";
import PresenterDemo from "../components/PresenterDemo";

const rectangle = Rectangle({
  x: 300,
  y: 500,
  width: 1800,
  height: 800,
  fillColor: Color.RED,
});

const circle = Circle({
  x: 2000,
  y: 1300,
  radius: 500,
  fillColor: Color.BLUE,
});

const slide = Slide({
  objects: [rectangle, circle],
});

const code = `
import { Circle, Color, Rectangle, Slide } from "presenter";

const rectangle = Rectangle({
  x: 300,
  y: 500,
  width: 1800,
  height: 800,
  fillColor: Color.RED,
});

const circle = Circle({
  x: 2000,
  y: 1300,
  radius: 500,
  fillColor: Color.BLUE,
});

const slide = Slide({
  objects: [rectangle, circle],
});
`;

export default function OverlappingShapes() {
  return (
    <div style={{ marginBottom: "1em" }}>
      <div style={{ marginBottom: "1em" }}>
        <PresenterDemo code={code} />
      </div>
      <PresenterDemo slide={slide} />
    </div>
  );
}
