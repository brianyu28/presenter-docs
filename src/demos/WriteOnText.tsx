import { Anchor, Animate, Color, Slide, Text } from "presenter";
import PresenterExample from "../components/PresenterExample";

const content = "Hello, world!";
const text = Text(content, {
  anchor: Anchor.CENTER,
  color: Color.WHITE,
  fontSize: 200,
  length: 0,
  x: 1920,
  y: 1080,
});

const slide = Slide({
  objects: [text],
  animations: [Animate(text, { length: content.length })],
});

const code = `
const content = "Hello, world!";
const text = Text(content, {
  anchor: Anchor.CENTER,
  color: Color.WHITE,
  fontSize: 200,
  length: 0,
  x: 1920,
  y: 1080,
});

const slide = Slide({
  objects: [text],
  animations: [Animate(text, { length: content.length })],
});
`;

export default function WriteOnText() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
