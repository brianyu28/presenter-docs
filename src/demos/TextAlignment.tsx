import { Alignment, Anchor, Color, Line, Slide, Text } from "presenter";
import PresenterExample from "../components/PresenterExample";

const guide = Line({
  startX: 1920,
  startY: 180,
  endX: 1920,
  endY: 1980,
  color: Color("#475569"),
  width: 10,
});

const alignments = [
  { alignment: Alignment.LEFT, y: 350, label: "LEFT" },
  { alignment: Alignment.CENTER, y: 950, label: "CENTER" },
  { alignment: Alignment.RIGHT, y: 1550, label: "RIGHT" },
];

const textBlocks = alignments.map(({ alignment, label, y }) =>
  Text([[label], ["A longer second line"]], {
    x: 1920,
    y,
    anchor: Anchor.TOP,
    alignment,
    fontSize: 120,
    lineSpacing: 1.25,
    color: Color.WHITE,
  }),
);

const slide = Slide({
  objects: [guide, ...textBlocks],
});

const code = `
import { Alignment, Slide, Text } from "presenter";

const alignments = [
  { alignment: Alignment.LEFT, y: 350, label: "LEFT" },
  { alignment: Alignment.CENTER, y: 950, label: "CENTER" },
  { alignment: Alignment.RIGHT, y: 1550, label: "RIGHT" },
];

const textBlocks = alignments.map(({ alignment, label, y }) =>
  Text([[label], ["A longer second line"]], {
    alignment,
    y,
    /* ... additional properties ... */
  }),
);

const slide = Slide({
  objects: [guide, ...textBlocks],
});
`;

export default function TextAlignment() {
  return <PresenterExample code={code} slide={slide} />;
}
