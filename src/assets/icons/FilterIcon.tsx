import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={12}
        fill="none"
        {...props}
    >
        <Path fill="#246BFE" d="M7 12h4v-2H7v2ZM0 0v2h18V0H0Zm3 7h12V5H3v2Z" />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
