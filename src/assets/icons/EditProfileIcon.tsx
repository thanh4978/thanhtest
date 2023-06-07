import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={19}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M0 15.25V19h3.75L14.81 7.94l-3.75-3.75L0 15.25ZM17.71 5.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
