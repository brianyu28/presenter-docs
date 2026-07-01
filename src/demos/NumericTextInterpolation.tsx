import {
  Anchor,
  Animate,
  Color,
  Easing,
  FontWeight,
  Slide,
  Text,
  type Interpolator,
} from "presenter";
import PresenterExample from "../components/PresenterExample";

const interpolateNumericText: Interpolator<string> = {
  check: (value, propertyName): value is string =>
    propertyName === "text" &&
    typeof value === "string" &&
    !Number.isNaN(Number(value)),
  interpolate: (from, to, progress) =>
    String(Math.round(Number(from) + (Number(to) - Number(from)) * progress)),
};

const counter = Text("0", {
  x: 1920,
  y: 1150,
  anchor: Anchor.CENTER,
  color: Color.WHITE,
  fontSize: 500,
  fontWeight: FontWeight.BOLD,
});

const label = Text("Numeric text interpolation", {
  x: 1920,
  y: 450,
  anchor: Anchor.CENTER,
  color: Color.WHITE,
  fontSize: 180,
});

const slide = Slide({
  objects: [label, counter],
  animations: [
    Animate(
      counter,
      { text: "100" },
      {
        duration: 1600,
        easing: Easing.CUBIC,
        interpolators: [interpolateNumericText],
      },
    ),
  ],
});

const code = `
import { Animate, Easing, Slide, Text, type Interpolator } from "presenter";

const interpolateNumericText: Interpolator<string> = {
  check: (value, propertyName): value is string =>
    propertyName === "text" &&
    typeof value === "string" &&
    !Number.isNaN(Number(value)),
  interpolate: (from, to, progress) =>
    String(Math.round(Number(from) + (Number(to) - Number(from)) * progress)),
};

const counter = Text("0", {
  /* ... additional properties ... */
});

const slide = Slide({
  objects: [label, counter],
  animations: [
    Animate(counter, { text: "100" }, {
      duration: 1600,
      easing: Easing.CUBIC,
      interpolators: [interpolateNumericText],
    }),
  ],
});
`;

export default function NumericTextInterpolation() {
  return <PresenterExample code={code} slide={slide} showControls />;
}
