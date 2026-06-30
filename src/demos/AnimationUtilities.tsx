import {
  Anchor,
  Circle,
  Color,
  FadeIn,
  FadeOut,
  Hide,
  Pause,
  Rectangle,
  Show,
  Slide,
  Update,
} from "presenter";
import PresenterExample from "../components/PresenterExample";

const card = Rectangle({
  x: 1050,
  y: 1080,
  width: 900,
  height: 650,
  cornerRadius: 80,
  anchor: Anchor.CENTER,
  fillColor: Color.RED,
  opacity: 0,
});

const circle = Circle({
  x: 2790,
  y: 1080,
  radius: 320,
  anchor: Anchor.CENTER,
  fillColor: Color("#f59e0b"),
  opacity: 0,
});

const slide = Slide({
  objects: [card, circle],
  animations: [
    Show(card),
    Update(card, { fillColor: Color("#3b82f6") }),
    [
      FadeOut(card, { duration: 350, block: true }),
      Pause(250),
      FadeIn(circle, 450),
    ],
    [Hide(circle), Show(card)],
  ],
});

const code = `
const slide = Slide({
  objects: [card, circle],
  animations: [
    Show(card),
    Update(card, { fillColor: Color("#3b82f6") }),
    [
      FadeOut(card, { duration: 350, block: true }),
      Pause(250),
      FadeIn(circle, 450),
    ],
    [
      Hide(circle),
      Show(card),
    ],
  ],
});
`;

export default function AnimationUtilities() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
