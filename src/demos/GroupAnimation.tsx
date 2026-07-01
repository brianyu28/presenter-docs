import {
  Alignment,
  Anchor,
  Animate,
  Color,
  Easing,
  Group,
  Rectangle,
  Slide,
  Text,
} from "presenter";
import PresenterExample from "../components/PresenterExample";

const cardBackground = Rectangle({
  width: 1300,
  height: 720,
  cornerRadius: 90,
  fillColor: Color("#2563eb"),
});

const cardTitle = Text("One group", {
  x: 650,
  y: 230,
  anchor: Anchor.CENTER,
  alignment: Alignment.CENTER,
  fontSize: 180,
  color: Color.WHITE,
});

const cardBody = Text([["Move, scale, rotate,"], ["and fade together."]], {
  x: 650,
  y: 470,
  anchor: Anchor.CENTER,
  alignment: Alignment.CENTER,
  fontSize: 100,
  lineSpacing: 1.25,
  color: Color("#dbeafe"),
});

const card = Group([cardBackground, cardTitle, cardBody], {
  x: 1250,
  y: 1080,
  width: 1300,
  height: 720,
  anchor: Anchor.CENTER,
});

const slide = Slide({
  objects: [card],
  animations: [
    Animate(
      card,
      {
        x: 2550,
        opacity: 0.5,
        rotation: 18,
        scale: 1.4,
      },
      {
        easing: Easing.CUBIC,
      },
    ),
  ],
});

const code = `
import { Anchor, Animate, Easing, Group, Slide } from "presenter";

const card = Group([cardBackground, cardTitle, cardBody], {
  x: 1250,
  y: 1080,
  width: 1300,
  height: 720,
  anchor: Anchor.CENTER,
});

const slide = Slide({
  objects: [card],
  animations: [
    Animate(
      card,
      {
        x: 2550,
        opacity: 0.5,
        rotation: 18,
        scale: 1.4,
      },
      { easing: Easing.CUBIC },
    ),
  ],
});
`;

export default function GroupAnimation() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
