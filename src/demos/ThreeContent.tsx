import { Anchor, Animate, Easing, Pause, Slide } from "presenter";
import { ThreeModel, ThreeModelNode, ThreeScene } from "presenter/3d";
import PresenterExample from "../components/PresenterExample";
import { position, scaleX, scaleY } from "../utils/size";

const door = ThreeModelNode({
  name: "Door",
});

const house = ThreeModel({
  src: "/models/house.glb",
  nodes: [door],
  scale: 0.3,
  y: -1,
});

const scene = ThreeScene([house], {
  anchor: Anchor.CENTER,
  ...position(0.5, 0.5),
  width: scaleX(1),
  height: scaleY(1),
  cameraY: 0.8,
});

const slide = Slide({
  objects: [scene],
  animations: [
    Animate(house, { rotationY: 50, x: -1 }, { easing: Easing.CUBIC }),
    Animate(house, { rotationY: -50, x: 1 }, { easing: Easing.CUBIC }),
    Animate(door, { rotationY: -120 }, { easing: Easing.CUBIC }),
    [
      Animate(house, { rotationY: 0, x: 0 }, { easing: Easing.CUBIC }),
      Pause(500),
      Animate(door, { rotationY: 0 }, { easing: Easing.CUBIC }),
    ],
  ],
});

const code = `
import { Anchor, Animate, Easing, Pause, Slide } from "presenter";
import { ThreeModel, ThreeModelNode, ThreeScene } from "presenter/3d";
import PresenterExample from "../components/PresenterExample";

const door = ThreeModelNode({
  name: "Door",
});

const house = ThreeModel({
  src: "/models/house.glb",
  nodes: [door],
});

const scene = ThreeScene([house], {
  anchor: Anchor.CENTER,
  cameraY: 0.8,
  height: 2160,
  width: 3840,
  ...position(0.5, 0.5),
});

const slide = Slide({
  objects: [scene],
  animations: [
    Animate(house, { rotationY: 50, x: -1 }),
    Animate(house, { rotationY: -50, x: 1 }),
    Animate(door, { rotationY: -120 }),
    [
      Animate(house, { rotationY: 0, x: 0 }),
      Pause(500),
      Animate(door, { rotationY: 0 }),
    ],
  ],
});
`;

export default function ThreeContent() {
  return (
    <PresenterExample code={code} slide={slide} showControls useThreeRenderer />
  );
}
