const WIDTH = 3840;
const HEIGHT = 2160;

export const scaleX = (width: number) => width * WIDTH;
export const scaleY = (height: number) => height * HEIGHT;
export const position = (x: number, y: number) => ({
  x: scaleX(x),
  y: scaleY(y),
});
