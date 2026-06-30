import { Color, Rectangle, Slide } from "presenter";
import PresenterExample from "../components/PresenterExample";

const rectangles = [];
for (let i = 0; i < 6; i++) {
  rectangles.push(
    Rectangle({
      x: 180 + i * 600,
      y: 900,
      width: 500,
      height: 500,
      fillColor: Color((i + 2) * 32, (i + 2) * 32, 148),
    }),
  );
}

const slide = Slide({
  objects: [...rectangles],
});

const code = `
import { Color, Rectangle, Slide } from "presenter";

const rectangles = [];
for (let i = 0; i < 6; i++) {
  rectangles.push(
    Rectangle({
      x: 180 + i * 600,
      y: 900,
      width: 500,
      height: 500,
      fillColor: Color((i + 2) * 32, (i + 2) * 32, 148),
    }),
  );
}

const slide = Slide({
  objects: [...rectangles],
});
`;

export default function ShapeLoop() {
  return <PresenterExample code={code} slide={slide} />;
}
