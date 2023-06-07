import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={12}
        fill="none"
        {...props}
    >
        <Path fill="#246BFE" d="M2 0 .59 1.41 5.17 6 .59 10.59 2 12l6-6-6-6Z" />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
