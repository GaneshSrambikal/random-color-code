export default function toRGB(cmykValue: string) {
  const rgb: number[] = [];
  let rgbString: string = '';
  const cmykStringValues: Array<string> = cmykValue
    .replace(/[^\d,]/g, '')
    .split(',');
  console.log(cmykStringValues);
  const cmyk: Array<number> = [];

  cmykStringValues.forEach((element) => {
    const toNum: number = Number(element);
    cmyk.push(toNum);
  });
  const c = cmyk[0] / 100;
  const m = cmyk[1] / 100;
  const y = cmyk[2] / 100;
  const k = cmyk[3] / 100;

  rgb[0] = Math.floor(255 * (1 - c) * (1 - k));
  rgb[1] = Math.floor(255 * (1 - m) * (1 - k));
  rgb[2] = Math.floor(255 * (1 - y) * (1 - k));

  rgbString = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;

  return rgbString;
}
