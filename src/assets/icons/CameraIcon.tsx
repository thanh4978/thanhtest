import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
        {...props}
    >
        <Path
            fill="#246BFE"
            d="M20 26.4a6.4 6.4 0 1 0 0-12.8 6.4 6.4 0 0 0 0 12.8Z"
        />
        <Path
            fill="#246BFE"
            d="m14 0-3.66 4H4C1.8 4 0 5.8 0 8v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4h-6.34L26 0H14Zm6 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
