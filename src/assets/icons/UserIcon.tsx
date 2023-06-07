import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
import { theme } from '../../theme';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#246BFE"
            d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
