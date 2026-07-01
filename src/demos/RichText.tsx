import {
  Anchor,
  Color,
  FontStyle,
  FontWeight,
  Slide,
  Text,
  TextUnit,
} from "presenter";
import PresenterExample from "../components/PresenterExample";

const message = Text(
  [
    [
      "Presenter.js supports ",
      TextUnit("rich text", {
        color: Color("#60a5fa"),
        fontWeight: FontWeight.BOLD,
      }),
    ],
    [
      TextUnit("across multiple lines", {
        fontStyle: FontStyle.ITALIC,
        fontFamily: "serif",
      }),
    ],
  ],
  {
    x: 1920,
    y: 1080,
    anchor: Anchor.CENTER,
    color: Color.WHITE,
    fontSize: 140,
    lineSpacing: 1.3,
    length: 31,
  },
);

const slide = Slide({
  objects: [message],
  animations: [Text.writeOn(message)],
});

const code = `
import { FontStyle, FontWeight, Slide, Text, TextUnit } from "presenter";

const message = Text(
  [
    [
      "Presenter.js supports ",
      TextUnit("rich text", { color: Color("#60a5fa"), fontWeight: FontWeight.BOLD }),
    ],
    [
      TextUnit("across multiple lines", { fontStyle: FontStyle.ITALIC, fontFamily: "serif" }),
    ],
  ],
  {
    length: 31,
    /* ... additional properties ... */
  },
);

const slide = Slide({
  objects: [message],
  animations: [Text.writeOn(message)],
});
`;

export default function RichText() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
