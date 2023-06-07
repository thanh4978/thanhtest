import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#246BFE"
            d="M12 0H2C.9 0 0 .9 0 2v16l7-3 7 3V2c0-1.1-.9-2-2-2Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
