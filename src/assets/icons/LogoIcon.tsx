import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={176}
    height={112}
    fill="none"
    {...props}
  >
    <Path
      stroke="url(#a)"
      strokeWidth={17.081}
      d="M72.617 14.9c-4.611-7.866-16.14-7.866-20.751 0L10.623 85.247c-4.611 7.866 1.153 17.698 10.376 17.698H155c9.223 0 14.987-9.832 10.376-17.698L124.134 14.9c-4.611-7.865-16.14-7.865-20.751 0L88 41.14l-15.383-26.24Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#5189ED"
      strokeWidth={17.081}
      d="M94.406 70.12c0 6.655-4.238 9.34-6.406 9.34-2.168 0-6.405-2.684-6.405-9.34 0-.655.343-2.382 1.614-5.278 1.18-2.687 2.825-5.64 4.58-8.478l.211-.338.21.338c1.756 2.837 3.401 5.791 4.581 8.478 1.272 2.896 1.615 4.623 1.615 5.278Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={88}
        x2={88}
        y1={9}
        y2={102.946}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8759F2" />
        <Stop offset={1} stopColor="#00D4E6" />
      </LinearGradient>
    </Defs>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
