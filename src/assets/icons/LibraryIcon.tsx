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
            d="M40 28V4c0-2.2-1.8-4-4-4H12C9.8 0 8 1.8 8 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4Zm-22-8 4.06 5.42L28 18l8 10H12l6-8ZM0 8v28c0 2.2 1.8 4 4 4h28v-4H4V8H0Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
