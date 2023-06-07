import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={10}
        fill="none"
        {...props}
    >
        <Path
            stroke="#246BFE"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m9 9 4-4m0 0L9 1m4 4H1"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
