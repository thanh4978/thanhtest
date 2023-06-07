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
            fill="#1877F2"
            d="M27 0H5a5 5 0 0 0-5 5v22a5 5 0 0 0 5 5h22a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5Z"
        />
        <Path
            fill="#fff"
            d="M24 16c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V16h2v-1.8c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V16h2.2l-.4 2.3h-1.9V24c4-.6 6.9-4 6.9-8Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
