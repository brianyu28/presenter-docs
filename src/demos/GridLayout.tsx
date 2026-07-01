import {
  Alignment,
  Anchor,
  Color,
  Grid,
  Group,
  Rectangle,
  Slide,
  Text,
} from "presenter";
import PresenterExample from "../components/PresenterExample";

const COLORS = [
  Color("#2563eb"),
  Color("#7c3aed"),
  Color("#db2777"),
  Color("#ea580c"),
  Color("#0891b2"),
  Color("#059669"),
  Color("#65a30d"),
  Color("#ca8a04"),
];

function createCell(row: number, col: number) {
  const number = row * 4 + col + 1;
  return Group(
    [
      Rectangle({
        width: 650,
        height: 400,
        cornerRadius: 60,
        fillColor: COLORS[number - 1],
      }),
      Text(String(number), {
        x: 325,
        y: 200,
        anchor: Anchor.CENTER,
        alignment: Alignment.CENTER,
        fontSize: 150,
        color: Color.WHITE,
      }),
    ],
    {
      width: 650,
      height: 400,
    },
  );
}

const { grid } = Grid({
  rows: 2,
  cols: 4,
  width: 650,
  height: 400,
  gapX: 80,
  gapY: 100,
  x: 1920,
  y: 1080,
  anchor: Anchor.CENTER,
  objects: createCell,
});

const slide = Slide({
  objects: [grid],
});

const code = `
import { Grid, Rectangle, Slide, Text } from "presenter";

const { grid } = Grid({
  rows: 2,
  cols: 4,
  width: 650,
  height: 400,
  gapX: 80,
  gapY: 100,
  objects: (row, col) =>
    Group(
      [
        Rectangle({
          fillColor: COLORS[row * 4 + col],
          /* ... additional properties ... */
        }),
        Text(String(row * 4 + col + 1), {
          /* ... additional properties ... */
        }),
      ],
      {
        width: 650,
        height: 400,
      },
    ),
    /* ... additional properties ... */
});

const slide = Slide({
  objects: [grid],
});
`;

export default function GridLayout() {
  return <PresenterExample code={code} slide={slide} />;
}
