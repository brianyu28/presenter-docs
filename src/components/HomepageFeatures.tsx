import {
  Anchor,
  Animate,
  Arrow,
  Color,
  FadeIn,
  Grid,
  Group,
  Rectangle,
  Slide,
  Text,
} from "presenter";
import type { ReactNode } from "react";
import { ease } from "../utils/ease";
import { position, scaleX, scaleY } from "../utils/size";
import styles from "./HomepageFeatures.module.css";
import PresenterDemo from "./PresenterDemo";

/**
 * Create slide
 */

const hello = Text("Hello, world!", {
  anchor: Anchor.CENTER,
  color: Color.WHITE,
  fontSize: 300,
  ...position(0.5, 0.5),
});

const createSlide = Slide({
  objects: [hello],
});

const createCode = `
const hello = Text("Hello, world!", {
  anchor: Anchor.CENTER,
  color: Color.WHITE,
  fontSize: 300,
  ...position(0.5, 0.5),
});

const slide = Slide({
  objects: [hello],
});
`;

/**
 * Animation slide
 */

const rect1 = Rectangle({
  width: 800,
  height: 400,
  strokeColor: Color("#407abe"),
  strokeWidth: 40,
  fillColor: Color.WHITE,
  cornerRadius: 20,
});

const text1 = Text("Step 1", {
  fontSize: 200,
  x: 400,
  y: 180,
  anchor: Anchor.CENTER,
});

const group1 = Group([rect1, text1], {
  width: 800,
  height: 400,
  ...position(0.5, 0.5),
  anchor: Anchor.CENTER,
});

const rect2 = Rectangle({
  width: 800,
  height: 400,
  strokeColor: Color("#407abe"),
  strokeWidth: 40,
  fillColor: Color.WHITE,
  cornerRadius: 20,
});

const text2 = Text("Step 2", {
  fontSize: 200,
  x: 400,
  y: 180,
  anchor: Anchor.CENTER,
});

const group2 = Group([rect2, text2], {
  width: 800,
  height: 400,
  ...position(0.74, 0.5),
  anchor: Anchor.CENTER,
  opacity: 0,
});

const arrow = Arrow({
  startX: scaleX(0.4),
  endX: scaleX(0.6),
  startY: scaleY(0.5),
  endY: scaleY(0.5),
  color: Color.WHITE,
  width: 40,
  drawn: 0,
});

const animateSlide = Slide({
  objects: [group1, arrow, group2],
  animations: [
    Animate(group1, { x: 1000 }, ease),
    FadeIn(group2, ease),
    Animate(arrow, { drawn: 1 }, ease),
    [
      Animate(group1, { y: 700 }, ease),
      Animate(group2, { y: 1500 }, ease),
      Animate(arrow, { startY: 700, endY: 1500 }, ease),
    ],
  ],
});

const animateCode = `
const slide = Slide({
  objects: [step1, arrow, step2],
  animations: [
    Animate(step1, { x: 1000 }),
    FadeIn(step2),
    Animate(arrow, { drawn: 1 }),
    [
      Animate(step1, { y: 700 }),
      Animate(step2, { y: 1500 }),
      Animate(arrow, { startY: 700, endY: 1500 }),
    ],
  ],
});
`;

const colors = Grid({
  rows: 8,
  cols: 8,
  height: 100,
  width: 100,
  objects: (i, j) =>
    Rectangle({
      fillColor: Color(i * 32, j * 32, 128),
    }),
  ...position(0.5, 0.5),
  anchor: Anchor.CENTER,
  groupProps: {
    scale: 2,
  },
});

const codingSlide = Slide({
  objects: [colors.grid],
});

const codingCode = `
const colors = Grid({
  rows: 8,
  cols: 8,
  objects: (i, j) =>
    Rectangle({
      fillColor: Color(i * 32, j * 32, 128),
    }),
  ...props,
});

const slide = Slide({
  objects: [colors.grid],
});
`;

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.section}>
          <h2>Create</h2>
          <p>
            Presenter.js enables you to write JavaScript or TypeScript code to
            create slide presentations. Each presentation is just code, so you
            can create pixel-perfect designs, version control your work, create
            reusable slide components, and programmatically generate complex and
            dynamic content.
          </p>
          <PresenterDemo slide={createSlide} code={createCode} />
        </div>
        <div className={styles.section}>
          <h2>Animate</h2>
          <p>
            Presenter.js makes it easy to create beautiful animations. Animate
            any object property, chain animations together,
          </p>
          <PresenterDemo slide={animateSlide} code={animateCode} showControls />
        </div>
        <div className={styles.section}>
          <h2>Code</h2>
          <p>
            Every slide in Presenter.js is a JavaScript object, so you can
            quickly generate content and animations with functions, loops, and
            other programming constructs.
          </p>
          <PresenterDemo slide={codingSlide} code={codingCode} />
        </div>
      </div>
    </section>
  );
}
