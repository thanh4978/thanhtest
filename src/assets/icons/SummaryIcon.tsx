import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h24v24H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.04167)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAa0lEQVR4nGNgGH5A6YsXg8KXxwyKX/+ThEF65L94EraAHMMV4ZY8ImwBuYYrQjFJFhALBq8FirQOIsWBigNFNPnBa4HisIsDRRyGDV4LFIddHMDACM8HCrSucOS/eIIVkmO4/BcPwhYMNQAA1JARSgC0YSgAAAAASUVORK5CYII="
        id="b"
        width={24}
        height={24}
      />
    </Defs>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
