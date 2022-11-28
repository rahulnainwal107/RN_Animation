export default () => {
  const red = Math.floor(Math.random() * 256),
    green = Math.floor(Math.random() * 256),
    blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
