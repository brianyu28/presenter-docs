import { Anchor, Animate, Circle, Color, Slide } from "presenter";
import PresenterExample from "../components/PresenterExample";

const BLUE = Color(125, 157, 224);

const dots = [600, 1150, 1700].map((y, index) =>
  Circle({
    x: 1120,
    y,
    radius: 170,
    anchor: Anchor.CENTER,
    fillColor: BLUE,
  }),
);

const slide = Slide({
  objects: [...dots],
  animations: [
    [
      Animate(
        dots[0],
        { x: 2720 },
        {
          duration: 500,
          block: true,
        },
      ),
      Animate(
        dots[1],
        { x: 2720 },
        {
          duration: 500,
          block: true,
        },
      ),
      Animate(
        dots[2],
        { x: 2720 },
        {
          duration: 500,
        },
      ),
    ],
  ],
});

const code = `
const slide = Slide({
  objects: [first, second, third],
  animations: [
    [
      Animate(first, { x: 2720 }, {
        duration: 500,
        block: true,
      }),
      Animate(second, { x: 2720 }, {
        duration: 500,
        block: true,
      }),
      Animate(third, { x: 2720 }, {
        duration: 500,
      }),
    ],
  ],
});
`;

export default function AnimationTiming() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
