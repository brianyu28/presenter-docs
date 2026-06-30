import { Color, Slide, Text } from "presenter";
import PresenterExample from "../components/PresenterExample";

const text = Text("Hello, world!", {
  fontSize: 200,
  color: Color.WHITE,
  x: 200,
  y: 150,
});

const slide = Slide({
  objects: [text],
});

const code = `
import { Color, Slide, Text } from "presenter";

const text = Text("Hello, world!", {
  x: 200,
  y: 200,
  fontSize: 200,
  color: Color.WHITE,
});

const slide = Slide({
  objects: [text],
});
`;

export default function SimpleText() {
  return <PresenterExample code={code} slide={slide} />;
}
