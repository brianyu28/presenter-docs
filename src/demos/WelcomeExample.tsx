import { Anchor, Color, Slide, Text } from "presenter";
import PresenterDemo from "../components/PresenterDemo";
import { position } from "../utils/size";

const text = Text("Hello, world!", {
  anchor: Anchor.CENTER,
  fontSize: 150,
  ...position(0.5, 0.5),
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

export default function WelcomeExample() {
  return <PresenterDemo backgroundColor={Color.WHITE} slide={slide} />;
}
