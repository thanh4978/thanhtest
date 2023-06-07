import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
import { theme } from '../../theme';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#246BFE"
            d="m2.01 3.03 7.51 3.22-7.52-1 .01-2.22Zm7.5 8.72L2 14.97v-2.22l7.51-1ZM.01 0 0 7l15 2-15 2 .01 7L21 9 .01 0Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
