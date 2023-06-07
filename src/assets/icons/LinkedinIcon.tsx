import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Path
            fill="#246BFE"
            d="M27 0H5a5 5 0 0 0-5 5v22a5 5 0 0 0 5 5h22a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5Z"
        />
        <Path
            fill="#fff"
            d="M11.6 24H8.2V13.3h3.4V24ZM9.9 11.8C8.8 11.8 8 11 8 9.9 8 8.8 8.9 8 9.9 8c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9ZM24 24h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V24h-3.4V13.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V24h.2Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
