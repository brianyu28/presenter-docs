import { Animate, Arrow, Color, Easing, Line, Slide, Text } from "presenter";
import PresenterExample from "../components/PresenterExample";

const line = Line({
  startX: 500,
  startY: 800,
  endX: 3340,
  endY: 800,
  width: 32,
  color: Color("#60a5fa"),
  isRounded: true,
  drawn: 0,
});

const arrow = Arrow({
  startX: 500,
  startY: 1450,
  endX: 3340,
  endY: 1450,
  width: 32,
  arrowheadSize: 150,
  color: Color("#fbbf24"),
  isArrowheadFilled: true,
  drawn: 0,
});

const labels = [
  Text("Line", {
    x: 500,
    y: 560,
    fontSize: 110,
    color: Color.WHITE,
  }),
  Text("Arrow", {
    x: 500,
    y: 1210,
    fontSize: 110,
    color: Color.WHITE,
  }),
];

const slide = Slide({
  objects: [...labels, line, arrow],
  animations: [
    [
      Animate(
        line,
        { drawn: 1 },
        {
          duration: 700,
          easing: Easing.CUBIC,
        },
      ),
      Animate(
        arrow,
        { drawn: 1 },
        {
          duration: 700,
          delay: 200,
          easing: Easing.CUBIC,
        },
      ),
    ],
  ],
});

const code = `
import { Arrow, Color, Line } from "presenter";

const line = Line({
  startX: 500,
  startY: 800,
  endX: 3340,
  endY: 800,
  width: 32,
  color: Color("#60a5fa"),
  isRounded: true,
});

const arrow = Arrow({
  startX: 500,
  startY: 1450,
  endX: 3340,
  endY: 1450,
  width: 32,
  arrowheadSize: 150,
  color: Color("#fbbf24"),
  isArrowheadFilled: true,
});
`;

export default function Lines() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
