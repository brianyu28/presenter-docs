import {
  Anchor,
  Animate,
  Color,
  Easing,
  FadeIn,
  Rectangle,
  Slide,
  Spotlight,
  Text,
} from "presenter";
import PresenterExample from "../components/PresenterExample";

const cardCenters = [820, 1920, 3020];
const cards = cardCenters.flatMap((x, index) => [
  Rectangle({
    x,
    y: 1080,
    width: 850,
    height: 760,
    anchor: Anchor.CENTER,
    cornerRadius: 70,
    fillColor: [Color("#2563eb"), Color("#7c3aed"), Color("#db2777")][index],
  }),
  Text(`Step ${index + 1}`, {
    x,
    y: 1080,
    anchor: Anchor.CENTER,
    fontSize: 150,
    color: Color.WHITE,
  }),
]);

const spotlight = Spotlight({
  x: cardCenters[0],
  y: 1080,
  width: 900,
  height: 810,
  anchor: Anchor.CENTER,
  cornerRadius: 85,
  opacity: 0,
});

const slide = Slide({
  objects: [...cards, spotlight],
  animations: [
    FadeIn(spotlight),
    Animate(
      spotlight,
      { x: cardCenters[1] },
      {
        duration: 550,
        easing: Easing.CUBIC,
      },
    ),
    Animate(
      spotlight,
      { x: cardCenters[2] },
      {
        duration: 550,
        easing: Easing.CUBIC,
      },
    ),
  ],
});

const code = `
import { Anchor, Animate, FadeIn, Spotlight, Slide } from "presenter";

const spotlight = Spotlight({
  x: 820,
  y: 1080,
  width: 900,
  height: 810,
  anchor: Anchor.CENTER,
  cornerRadius: 85,
  opacity: 0,
});

const slide = Slide({
  // Put the spotlight after the content it dims
  objects: [...cards, spotlight],
  animations: [
    FadeIn(spotlight),
    Animate(spotlight, { x: 1920 }),
    Animate(spotlight, { x: 3020 }),
  ],
});
`;

export default function SpotlightFocus() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
