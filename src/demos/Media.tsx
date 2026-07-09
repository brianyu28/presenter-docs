import { Anchor, Color, Image, Rectangle, Slide, SVG, Text } from "presenter";
import PresenterExample from "../components/PresenterExample";

const image = Image({
  imagePath: "/img/presenter.png",
  x: 1000,
  y: 1080,
  width: 1050,
  height: 1050,
  anchor: Anchor.CENTER,
  cornerRadius: 120,
});

const svgMarkup = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
  <rect width="600" height="600" rx="90" fill="#2563eb"/>
  <path d="M150 390 L270 270 L350 350 L460 210"
        fill="none" stroke="white" stroke-width="38"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const svg = SVG({
  svg: svgMarkup,
  x: 2810,
  y: 1080,
  width: 800,
  height: 800,
  anchor: Anchor.CENTER,
});

const divider = Rectangle({
  x: 1912,
  y: 430,
  width: 16,
  height: 1300,
  fillColor: Color("#334155"),
});

const labels = [
  Text("Image resource", {
    x: 1000,
    y: 350,
    anchor: Anchor.CENTER,
    fontSize: 115,
    color: Color.WHITE,
  }),
  Text("Inline SVG", {
    x: 2810,
    y: 350,
    anchor: Anchor.CENTER,
    fontSize: 115,
    color: Color.WHITE,
  }),
];

const slide = Slide({
  objects: [divider, image, svg, ...labels],
});

const code = `
import { Image, SVG } from "presenter";

const image = Image({
  imagePath: "/img/presenter.png",
  /* ... additional properties ... */
});

const icon = SVG({
  svg: \`<svg viewBox="0 0 600 600">...</svg>\`,
  /* ... additional properties ... */
});
`;

export default function Media() {
  return <PresenterExample code={code} slide={slide} />;
}
