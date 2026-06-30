import {
  Anchor,
  Circle,
  Color,
  Path,
  Polygon,
  Rectangle,
  Slide,
  Text,
} from "presenter";
import PresenterExample from "../components/PresenterExample";

const labels = [
  ["Rectangle", 980, 350],
  ["Circle", 2860, 350],
  ["Polygon", 980, 1250],
  ["Path", 2860, 1250],
].map(([label, x, y]) =>
  Text(label as string, {
    x: x as number,
    y: y as number,
    anchor: Anchor.CENTER,
    fontSize: 110,
    color: Color("#cbd5e1"),
  }),
);

const rectangle = Rectangle({
  x: 330,
  y: 500,
  width: 1300,
  height: 520,
  cornerRadius: 80,
  fillColor: Color("#3b82f6"),
  strokeColor: Color("#bfdbfe"),
  strokeWidth: 18,
});

const circle = Circle({
  x: 2860,
  y: 760,
  radius: 300,
  anchor: Anchor.CENTER,
  fillColor: Color("#34d399"),
  strokeColor: Color("#d1fae5"),
  strokeWidth: 18,
});

const polygon = Polygon({
  points: [
    { x: 380, y: 1940 },
    { x: 980, y: 1390 },
    { x: 1580, y: 1940 },
  ],
  fillColor: Color("#f59e0b"),
  strokeColor: Color("#fef3c7"),
  strokeWidth: 18,
});

const path = Path({
  path: "M 50 4 L 61 36 L 96 36 L 68 56 L 79 90 L 50 70 L 21 90 L 32 56 L 4 36 L 39 36 Z",
  x: 2450,
  y: 1390,
  width: 820,
  height: 620,
  viewboxWidth: 100,
  viewboxHeight: 100,
  fillColor: Color("#f472b6"),
  strokeColor: Color("#fce7f3"),
  strokeWidth: 3,
});

const slide = Slide({
  objects: [...labels, rectangle, circle, polygon, path],
});

const code = `
const rectangle = Rectangle({
  x: 330,
  y: 500,
  width: 1300,
  height: 520,
  cornerRadius: 80,
  fillColor: Color("#3b82f6"),
});

const circle = Circle({
  x: 2860,
  y: 760,
  radius: 300,
  anchor: Anchor.CENTER,
  fillColor: Color("#34d399"),
});

const polygon = Polygon({
  points: [
    { x: 380, y: 1940 },
    { x: 980, y: 1390 },
    { x: 1580, y: 1940 },
  ],
  fillColor: Color("#f59e0b"),
});

const path = Path({
  path: "M 50 4 L 61 36 L 96 36 ... Z",
  x: 2450,
  y: 1390,
  width: 820,
  height: 620,
  viewboxWidth: 100,
  viewboxHeight: 100,
  fillColor: Color("#f472b6"),
});
`;

export default function Shapes() {
  return <PresenterExample code={code} slide={slide} />;
}
