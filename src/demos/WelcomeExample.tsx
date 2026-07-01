import { Anchor, Color, Slide, Text } from "presenter";
import PresenterDemo from "../components/PresenterDemo";
import { position } from "../utils/size";

const text = Text("Welcome to Presenter.js!", {
  anchor: Anchor.CENTER,
  fontSize: 150,
  ...position(0.5, 0.5),
});

const slide = Slide({
  objects: [text],
});

export default function WelcomeExample() {
  return <PresenterDemo backgroundColor={Color.WHITE} slide={slide} />;
}
